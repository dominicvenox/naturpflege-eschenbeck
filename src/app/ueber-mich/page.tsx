"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Quote } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col pb-24 overflow-x-hidden">
      {/* Page Header */}
      <div className="bg-primary/5 py-12 sm:py-24">
        <Container className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Über mich & Philosophie
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Lernen Sie die Menschen und Werte hinter Naturpflege Eschenbeck kennen.
          </motion.p>
        </Container>
      </div>

      <Container className="mt-12 sm:mt-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Text Content */}
          <AnimatedSection direction="left">
            <div className="space-y-6 text-lg text-muted-foreground">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Markus Eschenbeck</h2>
              {[
                "Ich bin Markus Eschenbeck und wohne mit meiner Familie auf einem von uns liebevoll renovierten historischen Bauernhof im schönen Altmühltal bei Herrieden.",
                "Meine Großeltern hatten eine Schäferei und so bin ich seit frühester Kindheit und Jugend mit dem Thema Landschaftspflege, sowie Land- und Forstwirtschaft aufgewachsen. Diese tiefe Verwurzelung in der Region und der Natur prägt meine tägliche Arbeit.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Um meine Kenntnisse professionell zu erweitern, habe ich 2023/2024 an dem mehrfach ausgezeichneten Kurs <span className="font-medium text-foreground">&quot;Landschaft anpacken – Handarbeit in der Landschaftspflege&quot;</span> des Landschaftspflegeverbands Mittelfranken teilgenommen.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Den Obstbaumschnitt auf eigenen Flächen betreibe ich schon seit über 30 Jahren. Hierzu habe ich mich kontinuierlich an den Landwirtschaftlichen Lehranstalten Triesdorf weitergebildet. Als weiteren Schritt der Professionalisierung nehme ich 2026 an der Ausbildung zum <span className="font-medium text-foreground">Baumwart</span> im Bildungszentrum Triesdorf teil.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Nach Ende meiner Dienstzeit bei der Bundeswehr gründete ich mein Gewerbe mit dem Schwerpunkt Natur- und Landschaftspflege, um meine Leidenschaft zum Beruf zu machen.
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Image Placeholder */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted/50">
              <Image
                src="/markus-eschenbeck-ueber-mich.webp"
                alt="Markus Eschenbeck"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Philosophy Section */}
      <section className="mt-16 lg:mt-24 bg-secondary/10 py-16 lg:py-24 overflow-hidden">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="mx-auto h-12 w-12 text-secondary mb-6" />
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 break-words hyphens-auto">
                Unternehmens&shy;philosophie
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <blockquote className="text-2xl font-serif italic text-foreground/80 mb-10 leading-relaxed">
                &quot;Wir pflegen, was gewachsen ist - mit Hand und Verstand.&quot;
              </blockquote>
            </AnimatedSection>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 text-left mt-12 lg:mt-16" staggerDelay={0.15}>
              <StaggerItem>
                <motion.div
                  className="rounded-xl bg-background p-8 shadow-sm h-full"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">Natur & Kulturlandschaft</h3>
                  <p className="text-muted-foreground">
                    Uns liegt die Natur und unsere Fränkische Kulturlandschaft sehr am Herzen. Wir engagieren uns aktiv für ihren Erhalt und die Förderung der Artenvielfalt.
                  </p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="rounded-xl bg-background p-8 shadow-sm h-full"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">Spezialisierung auf Handarbeit</h3>
                  <p className="text-muted-foreground">
                    Wir fangen da an, wo große Maschinen nicht weiterkommen oder aus Naturschutzgründen nicht erwünscht sind. Wir arbeiten schonend mit Kleingeräten, Handsense und Rechen.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      <Container>
        <AnimatedSection className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Sie haben ein Projekt für uns?</h3>
          <Button size="lg" asChild>
            <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </AnimatedSection>
      </Container>
    </div>
  );
}
