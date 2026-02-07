"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="bg-muted mt-auto border-t">
      <Container className="py-8 md:py-16">
        <motion.div
          className="xl:grid xl:grid-cols-3 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <span className="text-xl font-bold tracking-tight text-primary">Naturpflege Eschenbeck</span>
            <p className="text-sm leading-6 text-muted-foreground w-full max-w-xs">
              Wir pflegen, was gewachsen ist - mit Hand und Verstand. Ihr Partner für Landschaftspflege im Altmühltal.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/ueber-mich" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Über mich
                    </Link>
                  </li>
                  <li>
                    <Link href="/leistungen" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Leistungen
                    </Link>
                  </li>
                  <li>
                    <Link href="/galerie" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Galerie
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="mt-10 md:mt-0" variants={itemVariants}>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Rechtliches</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/impressum" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link href="/datenschutz" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      Datenschutz
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Kontakt</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-muted-foreground">
                    Markus Eschenbeck
                  </li>
                  <li className="text-sm leading-6 text-muted-foreground">
                    Herrieden, Altmühltal
                  </li>
                  <li>
                    <a href="mailto:info@naturpflege-eschenbeck.de" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                      info@naturpflege-eschenbeck.de
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Naturpflege Eschenbeck. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
