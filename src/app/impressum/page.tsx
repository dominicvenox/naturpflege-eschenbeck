
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Impressum | Naturpflege Eschenbeck",
  description: "Impressum und rechtliche Angaben von Naturpflege Eschenbeck.",
};

export default function ImpressumPage() {
  return (
    <div className="flex flex-col pb-24">
      <div className="bg-primary/5 py-12 sm:py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Impressum
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Rechtliche Angaben
          </p>
        </Container>
      </div>

      <Container className="mt-12 sm:mt-16 max-w-3xl">
        <div className="space-y-12">
          {/* Angaben gemäß § 5 TMG */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted-foreground leading-relaxed">
              Markus Eschenbeck<br />
              Naturpflege Eschenbeck<br />
              Leibelbach 4<br />
              91567 Herrieden
            </p>
          </section>

          {/* Kontakt */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Telefon: <a href="tel:+4917664625119" className="text-primary hover:underline">+49 176 64625119</a><br />
              E-Mail: <a href="mailto:info@naturpflege-eschenbeck.de" className="text-primary hover:underline">info@naturpflege-eschenbeck.de</a>
            </p>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
            <p className="text-muted-foreground leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              Entfällt, da Kleinunternehmer nach § 19 UStG.
            </p>
          </section>

          {/* Redaktionell verantwortlich */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Redaktionell verantwortlich</h2>
            <p className="text-muted-foreground leading-relaxed">
              Markus Eschenbeck<br />
              Leibelbach 4<br />
              91567 Herrieden
            </p>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">EU-Streitschlichtung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
