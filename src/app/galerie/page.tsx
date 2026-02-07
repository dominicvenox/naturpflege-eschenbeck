"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Lightbox from "@/components/Lightbox";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock Data
const projects = [
  {
    id: 1,
    src: "/placeholder-1",
    alt: "Streuobstwiese Erhaltung",
    category: "Streuobst",
    description: "Verjüngungsschnitt alter Obstbäume."
  },
  {
    id: 2,
    src: "/placeholder-2",
    alt: "Trockenmauerbau",
    category: "Bau",
    description: "Neuanlage als Biotop für Eidechsen."
  },
  {
    id: 3,
    src: "/placeholder-3",
    alt: "Heckenpflege Herbst",
    category: "Landschaft",
    description: "Schonender Rückschnitt im Außenbereich."
  },
  {
    id: 4,
    src: "/placeholder-4",
    alt: "Neupflanzung",
    category: "Streuobst",
    description: "Pflanzung alter, robuster Sorten."
  },
  {
    id: 5,
    src: "/placeholder-5",
    alt: "Feuchtwiesen Pflege",
    category: "Landschaft",
    description: "Mahd mit dem Balkenmäher."
  },
  {
    id: 6,
    src: "/placeholder-6",
    alt: "Baumbestand Pflege",
    category: "Streuobst",
    description: "Baumschutz und Erhaltung."
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function GaleriePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col pb-24 min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="bg-primary/5 py-16 lg:py-24">
        <Container className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meine Arbeit
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Klassisches Handwerk im Einklang mit der Natur.
          </motion.p>
        </Container>
      </div>

      <Container className="mt-12 lg:mt-16">
        {/* Classic Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => setLightboxIndex(index)}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Clean Image Container */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-muted/20 relative mb-6">
                <motion.div
                  className="absolute inset-0 bg-muted/30 flex items-center justify-center"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-muted-foreground/20 text-5xl font-serif">{index + 1}</span>
                </motion.div>
                {/* Scale Effect on Image Placeholder */}
                <motion.div
                  className="absolute inset-0 bg-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Content Below Image */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{project.alt}</h3>
                <p className="text-muted-foreground line-clamp-2">{project.description}</p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Details ansehen <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox Overlay */}
      <Lightbox
        images={projects}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((prev) => (prev !== null && prev < projects.length - 1 ? prev + 1 : 0))}
        onPrev={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : projects.length - 1))}
      />
    </div>
  );
}
