"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Start", href: "/" },
  { name: "Über mich", href: "/ueber-mich" },
  { name: "Leistungen", href: "/leistungen" },
  // { name: "Galerie", href: "/galerie" }, // Temporär versteckt bis genug Bilder vorhanden sind
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ backgroundColor: "rgba(249, 249, 245, 0.6)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(249, 249, 245, 0.95)" : "rgba(249, 249, 245, 0.6)",
        boxShadow: scrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <motion.div
                className="relative h-10 lg:h-12 w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/Logo-quer.png"
                  alt="Naturpflege Eschenbeck"
                  width={414}
                  height={512}
                  className="h-full w-auto object-contain object-left"
                  priority
                />
              </motion.div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button asChild>
                <Link href="/kontakt">Angebot anfragen</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg z-50 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <Button className="w-full h-12 text-lg" asChild onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/kontakt">Angebot anfragen</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
