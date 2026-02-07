"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Leaf, Trees, Sprout, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary/5 pt-16 pb-12 lg:pt-32 lg:pb-24">
        {/* Green gradient background overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />

        <Container className="relative z-10 text-center">
          <motion.h1
            className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Wir pflegen, was gewachsen ist <br className="hidden sm:block" />
            <motion.span
              className="text-primary block mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              mit Hand und Verstand.
            </motion.span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Ihr kompetenter Partner für professionelle Landschafts- und Baumpflege im Altmühltal.
            Spezialisiert auf schonende Handarbeit für Natur und Kulturlandschaft.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button size="lg" className="text-lg px-8 h-14" asChild>
              <Link href="/kontakt">Kostenloses Angebot anfragen</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14" asChild>
              <Link href="/leistungen">Meine Leistungen</Link>
            </Button>
          </motion.div>

          {/* Trust Badges / Stats */}
          <motion.div
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {[
              { icon: ShieldCheck, label: "Zertifiziert" },
              { icon: Trees, label: "Nachhaltig" },
              { icon: Sprout, label: "Regional" },
              { icon: Leaf, label: "Schonend" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2 opacity-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <item.icon className="h-8 w-8 text-secondary" />
                <span className="text-sm font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-12 lg:py-24 bg-background">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="relative aspect-square overflow-hidden rounded-2xl bg-muted/50">
              <Image
                src="/markus-eschenbeck-naturpflege.webp"
                alt="Markus Eschenbeck von Naturpflege Eschenbeck - Fachgerechte Landschaftspflege und Baumpflege im Altmühltal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Tradition trifft auf modernes Fachwissen
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Ich bin Markus Eschenbeck. Aufgewachsen im schönen Rezattal,
                  wurde mir die Liebe zur Natur und Landwirtschaft in die Wiege gelegt.
                  Geprägt wurde ich durch die Schäferei meiner Großeltern, die mir früh die Leidenschaft für die Landschaftspflege vermittelte.
                </p>
                <p>
                  Mit meiner Erfahrung und speziellen Fortbildungen, wie dem Kurs &apos;Landschaft anpacken&apos;
                  und der angehenden Ausbildung zum Baumwart, stehe ich für fachgerechte und ökologisch
                  wertvolle Pflegearbeiten.
                </p>
                <p>
                  Mein Ziel ist es, unsere fränkische Kulturlandschaft zu erhalten – oft dort,
                  wo große Maschinen nicht hinkommen.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="ghost" className="pl-0 text-primary hover:bg-transparent hover:text-primary/80" asChild>
                  <Link href="/ueber-mich" className="group flex items-center text-lg font-semibold">
                    Mehr über mich und meine Philosophie <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-24 bg-muted/30">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meine Leistungen</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von der Streuobstwiese bis zur Heckenpflege – ich biete ein breites Spektrum an Dienstleistungen für gesunde Landschaften.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
            <StaggerItem>
              <ServiceCard
                title="Streuobstpflege"
                description="Fachgerechter Schnitt, Pflanzung und Erhalt von Obstbäumen für vitale Bestände und reiche Ernte."
                icon={<Trees className="h-6 w-6" />}
                href="/leistungen#streuobst"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Landschaftspflege"
                description="Entbuschung, Mahd von Feuchtwiesen und Pflege extensiv genutzter Flächen für mehr Artenvielfalt."
                icon={<Leaf className="h-6 w-6" />}
                href="/leistungen#landschaftspflege"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title="Baum- & Gehölzpflege"
                description="Pflanzung und Pflege von Hecken, Feldgehölzen sowie Baumschutzmaßnahmen."
                icon={<Sprout className="h-6 w-6" />}
                href="/leistungen#gehoelzpflege"
              />
            </StaggerItem>
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/leistungen">Alle Leistungen ansehen</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-primary text-primary-foreground overflow-hidden">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Bereit für ein gepflegtes Stück Natur?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10">
              Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch. Ich finde die passende Lösung für Ihr Grundstück.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg text-foreground font-semibold" asChild>
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
