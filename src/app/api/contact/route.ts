import { NextRequest, NextResponse } from 'next/server';
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

// Rate limiting (einfache In-Memory Variante)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 Anfragen
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Pro Stunde

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now > record.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return false;
    }

    record.count++;
    return true;
}

// Turnstile verifizieren
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
        console.error('TURNSTILE_SECRET_KEY not configured');
        return false;
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret: secretKey,
            response: token,
            remoteip: ip,
        }),
    });

    const data = await response.json();
    return data.success === true;
}

// Microsoft Graph Client erstellen
function getGraphClient(): Client {
    const credential = new ClientSecretCredential(
        process.env.AZURE_TENANT_ID!,
        process.env.AZURE_CLIENT_ID!,
        process.env.AZURE_CLIENT_SECRET!
    );

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: ['https://graph.microsoft.com/.default'],
    });

    return Client.initWithMiddleware({ authProvider });
}

// E-Mail senden
async function sendEmail(
    client: Client,
    to: string,
    subject: string,
    htmlBody: string
): Promise<void> {
    const message = {
        message: {
            subject,
            body: {
                contentType: 'HTML',
                content: htmlBody,
            },
            toRecipients: [
                {
                    emailAddress: {
                        address: to,
                    },
                },
            ],
        },
        saveToSentItems: true,
    };

    await client.api(`/users/${process.env.MAIL_FROM}/sendMail`).post(message);
}

// Service-Namen Mapping
const serviceNames: Record<string, string> = {
    baumpflege: 'Baumpflege',
    gruenpflege: 'Grünpflege',
    sonstiges: 'Sonstiges',
};

export async function POST(request: NextRequest) {
    try {
        // IP für Rate Limiting
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

        // Rate Limit prüfen
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            service,
            message,
            turnstileToken,
            honeypot
        } = body;

        // Honeypot prüfen (sollte leer sein)
        if (honeypot) {
            // Bot erkannt, aber täusche Erfolg vor
            return NextResponse.json({ success: true });
        }

        // Pflichtfelder prüfen
        if (!firstName || !lastName || !email || !service || !message || !turnstileToken) {
            return NextResponse.json(
                { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
                { status: 400 }
            );
        }

        // E-Mail Format prüfen
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
                { status: 400 }
            );
        }

        // Turnstile verifizieren
        const turnstileValid = await verifyTurnstile(turnstileToken, ip);
        if (!turnstileValid) {
            return NextResponse.json(
                { error: 'Sicherheitsüberprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.' },
                { status: 400 }
            );
        }

        // Graph Client erstellen
        const graphClient = getGraphClient();

        const serviceName = serviceNames[service] || service;

        // E-Mail an Betreiber
        const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2d5a27; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #2d5a27; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🌿 Neue Kontaktanfrage</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            <div class="field">
              <div class="label">E-Mail:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Telefon:</div>
              <div class="value">${phone || 'Nicht angegeben'}</div>
            </div>
            <div class="field">
              <div class="label">Gewünschte Leistung:</div>
              <div class="value">${serviceName}</div>
            </div>
            <div class="field">
              <div class="label">Nachricht:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #888;">
              Gesendet am ${new Date().toLocaleString('de-DE', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'Europe/Berlin'
        })} über naturpflege-eschenbeck.de
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

        await sendEmail(
            graphClient,
            process.env.MAIL_TO!,
            `Neue Anfrage: ${serviceName} von ${firstName} ${lastName}`,
            ownerEmailHtml
        );

        // Bestätigungs-E-Mail an Absender
        const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2d5a27; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .summary { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🌿 Naturpflege Eschenbeck</h2>
          </div>
          <div class="content">
            <p>Guten Tag ${firstName} ${lastName},</p>
            
            <p>vielen Dank für Ihre Anfrage! Ich habe Ihre Nachricht erhalten und werde mich in Kürze bei Ihnen melden.</p>
            
            <div class="summary">
              <strong>Zusammenfassung Ihrer Anfrage:</strong>
              <p><strong>Leistung:</strong> ${serviceName}</p>
              <p><strong>Ihre Nachricht:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>Bei dringenden Anliegen können Sie mich auch telefonisch erreichen.</p>
            
            <p>Mit freundlichen Grüßen,<br>
            <strong>Naturpflege Eschenbeck</strong></p>
          </div>
          <div class="footer">
            Naturpflege Eschenbeck | Leibelbach 4 | 91567 Herrieden<br>
            Tel: +49 176 64625119 | info@naturpflege-eschenbeck.de
          </div>
        </div>
      </body>
      </html>
    `;

        await sendEmail(
            graphClient,
            email,
            'Ihre Anfrage bei Naturpflege Eschenbeck',
            confirmationEmailHtml
        );

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
            { status: 500 }
        );
    }
}
