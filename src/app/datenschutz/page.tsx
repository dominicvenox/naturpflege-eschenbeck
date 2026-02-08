
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Datenschutzerklärung | Naturpflege Eschenbeck",
  description: "Datenschutzerklärung von Naturpflege Eschenbeck.",
};

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col pb-24">
      <div className="bg-primary/5 py-12 sm:py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Datenschutz&shy;erklärung
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Informationen zum Schutz Ihrer persönlichen Daten
          </p>
        </Container>
      </div>

      <Container className="mt-12 sm:mt-16 max-w-3xl">
        <div className="space-y-12 text-muted-foreground leading-relaxed">
          
          {/* 1. Datenschutz auf einen Blick */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-medium text-foreground">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="text-xl font-medium text-foreground">Datenerfassung auf dieser Website</h3>
            <h4 className="font-medium text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt &quot;Hinweis zur verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
            </p>
            <h4 className="font-medium text-foreground">Wie erfassen wir Ihre Daten?</h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <h4 className="font-medium text-foreground">Wofür nutzen wir Ihre Daten?</h4>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <h4 className="font-medium text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          {/* 2. Hosting */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-xl font-medium text-foreground">Hostinger</h3>
            <p>
              Anbieter ist die Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern (nachfolgend Hostinger).
            </p>
            <p>
              Wenn Sie unsere Website besuchen, erfasst Hostinger verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p>
              Details entnehmen Sie der Datenschutzerklärung von Hostinger: <a href="https://www.hostinger.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.hostinger.com/legal/privacy-policy</a>.
            </p>
            <p>
              Die Verwendung von Hostinger erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            
            <h3 className="text-xl font-medium text-foreground">Dokploy</h3>
            <p>
              Zur Verwaltung und Bereitstellung unserer Anwendungen nutzen wir Dokploy. Dokploy ist eine auf eigenen Servern gehostete Softwarelösung, die uns dabei unterstützt, unsere Dienste effizient und sicher zu betreiben. Da wir Dokploy selbst hosten (Self-Hosting), haben wir die volle Kontrolle über die verarbeiteten Daten; es erfolgt keine Übermittlung an den Hersteller der Software.
            </p>
          </section>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-medium text-foreground">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-medium text-foreground">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Markus Eschenbeck<br />
              Naturpflege Eschenbeck<br />
              Leibelbach 4<br />
              91567 Herrieden
            </p>
            <p>
              Telefon: +49 176 64625119<br />
              E-Mail: info@naturpflege-eschenbeck.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-medium text-foreground">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-medium text-foreground">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-medium text-foreground">Auskunft, Löschung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-medium text-foreground">Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3 className="text-xl font-medium text-foreground">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-medium text-foreground">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden sogenannte &quot;Cookies&quot;. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p>
              Technisch notwendige Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. Kontaktformular) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
            </p>

            <h3 className="text-xl font-medium text-foreground">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          {/* 5. Plugins und Tools */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Plugins und Tools</h2>
            
            <h3 className="text-xl font-medium text-foreground">Cloudflare Turnstile</h3>
            <p>
              Wir nutzen &quot;Cloudflare Turnstile&quot; (im Folgenden &quot;Turnstile&quot;) auf dieser Website. Anbieter ist die Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA.
            </p>
            <p>
              Mit Turnstile soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert Turnstile das Verhalten des Websitebesuchers anhand verschiedener Merkmale.
            </p>
            <p>
              Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen.
            </p>
            <p>
              Weitere Informationen zu Cloudflare Turnstile entnehmen Sie der Datenschutzerklärung von Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.cloudflare.com/privacypolicy/</a>.
            </p>

            <h3 className="text-xl font-medium text-foreground">OpenStreetMap</h3>
            <p>
              Wir nutzen den Kartendienst von OpenStreetMap (OSM). Anbieterin ist die Open-StreetMap Foundation (OSMF), 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72 1JU, United Kingdom.
            </p>
            <p>
              Zur Nutzung des Kartenmaterials von OpenStreetMap ist es notwendig, Informationen über Ihre Nutzung dieser Website (einschließlich Ihrer IP-Adresse) an einen Server von OpenStreetMap weiterzuleiten, um so z. B. Ihre Position anzuzeigen.
            </p>
            <p>
              Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          {/* 6. Microsoft Graph */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Microsoft Graph API</h2>
            <p>
              Zur Versendung von E-Mails über unser Kontaktformular nutzen wir die Microsoft Graph API, einen Dienst der Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA.
            </p>
            <p>
              Wenn Sie unser Kontaktformular nutzen, wird der Inhalt Ihrer Nachricht sowie die von Ihnen angegebenen Metadaten über die Server von Microsoft verarbeitet, um die E-Mail an uns zuzustellen. Dies dient der Sicherheit und Zuverlässigkeit unserer E-Mail-Kommunikation.
            </p>
            <p>
              Microsoft ist unter dem Data Privacy Framework zertifiziert und verpflichtet sich damit, die europäischen Datenschutzstandards einzuhalten.
            </p>
          </section>

        </div>
      </Container>
    </div>
  );
}
