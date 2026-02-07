"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="flex flex-col pb-24 overflow-x-hidden">
      {/* Header */}
      <div className="bg-primary/5 py-12 sm:py-24">
        <Container className="text-center">
          <motion.h1
            className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meine Leistungen
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle Pflege für Streuobstwiesen, Landschaft und naturnahe Gärten.
          </motion.p>
        </Container>
      </div>

      <Container className="mt-12 space-y-16 lg:space-y-24">
        {/* Category: Streuobst */}
        <section id="streuobst" className="scroll-mt-24">
          <AnimatedSection>
            <div className="md:flex md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-primary">Streuobstbestände</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <AnimatedSection direction="left">
              <div className="rounded-2xl border bg-card p-8 shadow-sm h-full">
                <p className="text-lg text-muted-foreground mb-6">
                  Streuobstwiesen sind wertvolle Kulturlandschaften. Ich kümmere mich um den kompletten Lebenszyklus Ihrer Obstbäume – von der Pflanzung bis zur Ernte.
                </p>
                <ul className="space-y-3">
                  {[
                    "Planung, Anlegen und Erhalt von Streuobstwiesen",
                    "Pflege von Obstbäumen im freien Gelände und in Gärten",
                    "Fachgerechter Obstbaumschnitt (Erziehung, Erhaltung, Verjüngung)",
                    "Obstbaumpflanzung und Sortenwahl",
                    "Flächenpflege (Mahd)",
                    "Obsternte"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="h-full">
              <div className="relative aspect-video rounded-2xl bg-muted/50 overflow-hidden h-full">
                <Image
                  src="/Apfelblüte-markus-eschenbeck-naturpflege.png"
                  alt="Apfelblüte - Streuobstpflege von Naturpflege Eschenbeck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Category: Landschaftspflege */}
        <section id="landschaftspflege" className="scroll-mt-24">
          <AnimatedSection>
            <div className="md:flex md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-primary">Landschaftspflege & Naturschutz</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl bg-muted/50 overflow-hidden h-full">
                <Image
                  src="/Entbuschung-Markus-Eschenbeck-Naturpflege.png"
                  alt="Markus Eschenbeck bei der Landschaftspflege - Entbuschung im Altmühltal"
                  fill
                  className="object-cover object-right-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="rounded-2xl border bg-card p-8 shadow-sm h-full">
                <p className="text-lg text-muted-foreground mb-6">
                  Ich pflege Landschaftspflegegebiete und extensiv genutzte Flächen, um die Biodiversität zu erhalten.
                </p>
                <ul className="space-y-3">
                  {[
                    "Entbuschung von Wiesen, Weiden und Forstflächen",
                    "Pflege von Feldgehölzen und Hecken",
                    "Pflege von Feuchtwiesen und Moorgebieten",
                    "Pflege von Gräben und Kleingewässern",
                    "Umwandlung von intensiv genutzten Flächen in naturnahe Lebensräume"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Category: Spezialleistungen */}
        <section id="gehoelzpflege" className="scroll-mt-24">
          <AnimatedSection>
            <div className="md:flex md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-primary">Spezialleistungen & Bau</h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid gap-6 lg:grid-cols-3 lg:gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div
                className="rounded-xl border bg-card p-6 shadow-sm h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-semibold mb-4">Pflanzung & Schutz</h3>
                <p className="text-muted-foreground mb-4">
                  Baum- und Heckenpflanzung einschließlich professionellem baulichen Schutz (Verbissschutz, Anbinden).
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="rounded-xl border bg-card p-6 shadow-sm h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-semibold mb-4">Trockenmauern</h3>
                <p className="text-muted-foreground mb-4">
                  Fachgerechtes Anlegen von Trockenmauern als Lebensraum für Eidechsen und Insekten sowie als Gestaltungselement.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="rounded-xl border bg-card p-6 shadow-sm h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-semibold mb-4">Schwieriges Gelände</h3>
                <p className="text-muted-foreground mb-4">
                  Ich bin spezialisiert auf Naturpflege auch in steilem oder schwer zugänglichem Gelände, wo Handarbeit gefragt ist.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
          <AnimatedSection delay={0.4}>
            <div className="mt-8 rounded-xl bg-muted/30 p-6 text-center">
              <p className="font-medium text-foreground">
                Selbstverständlich kümmere ich mich auch um die fachgerechte Entsorgung des Schnittguts.
              </p>
            </div>
          </AnimatedSection>
        </section>
      </Container>

      <AnimatedSection delay={0.2} className="mt-16 lg:mt-24 text-center">
        <Button size="lg" className="h-14 px-8 text-lg" asChild>
          <Link href="/kontakt">Individuelles Angebot anfordern</Link>
        </Button>
      </AnimatedSection>
    </div>
  );
}
