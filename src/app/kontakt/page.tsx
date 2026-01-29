"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, Check, TreeDeciduous, Scissors, Wrench } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Dynamically import Map with no SSR
const MapRaw = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse rounded-xl flex items-center justify-center">Karte wird geladen...</div>,
});

const services = [
  { id: "baumpflege", name: "Baumpflege", icon: TreeDeciduous },
  { id: "gruenpflege", name: "Grünpflege", icon: Scissors },
  { id: "sonstiges", name: "Sonstiges", icon: Wrench },
];

export default function KontaktPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    privacyAccepted: false,
    service: "",
    message: "",
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get service name for better readability
      const serviceName = services.find(s => s.id === formData.service)?.name || formData.service;
      
      // Prepare data for n8n webhook
      const webhookData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || "Nicht angegeben",
        service: serviceName,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: "naturpflege-eschenbeck.de"
      };

      // Send to n8n webhook
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error("Webhook URL nicht konfiguriert");
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success!
      setSubmitStatus('success');
      
      // Reset form after short delay
      setTimeout(() => {
        setStep(1);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          privacyAccepted: false,
          service: "",
          message: "",
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email;
  const isStep2Valid = formData.service && formData.message;
  const isStep3Valid = formData.privacyAccepted;

  return (
    <div className="flex flex-col pb-24 overflow-x-hidden">
      {/* Header */}
      <div className="bg-primary/5 py-12 sm:py-24">
        <Container className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kontakt
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Wir freuen uns auf Ihre Anfrage. Lassen Sie uns über Ihr Projekt sprechen.
          </motion.p>
        </Container>
      </div>

      <Container className="mt-12 sm:mt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Multi-Step Contact Form */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3].map((s, index) => (
                    <div key={s} className="flex items-center" style={{ flex: index < 2 ? 1 : 'none' }}>
                      <div className="flex flex-col items-center">
                        <motion.div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                            step > s
                              ? "bg-primary text-primary-foreground shadow-md"
                              : step === s
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                              : "bg-muted text-muted-foreground"
                          }`}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step > s ? <Check className="w-5 h-5" /> : s}
                        </motion.div>
                        <span className={`text-xs mt-2 font-medium transition-colors ${
                          step === s ? "text-primary" : "text-muted-foreground"
                        }`}>
                          {s === 1 ? "Persönlich" : s === 2 ? "Details" : "Absenden"}
                        </span>
                      </div>
                      {s < 3 && (
                        <div className="flex-1 h-0.5 mx-3 bg-muted relative overflow-hidden">
                          <motion.div
                            className="h-full bg-primary absolute top-0 left-0"
                            initial={{ width: "0%" }}
                            animate={{ width: step > s ? "100%" : "0%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Steps */}
              <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            Vorname *
                          </label>
                          <input
                            type="text"
                            id="first-name"
                            value={formData.firstName}
                            onChange={(e) => updateField("firstName", e.target.value)}
                            className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="Max"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Nachname *
                          </label>
                          <input
                            type="text"
                            id="last-name"
                            value={formData.lastName}
                            onChange={(e) => updateField("lastName", e.target.value)}
                            className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="Mustermann"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                          placeholder="max@beispiel.de"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Telefon (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                          placeholder="+49 123 45678"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Service & Message */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Welche Leistung interessiert Sie? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <motion.button
                                key={service.id}
                                type="button"
                                onClick={() => updateField("service", service.id)}
                                className={`relative p-4 rounded-lg border-2 transition-all ${
                                  formData.service === service.id
                                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                                    : "border-input hover:border-primary/50 hover:bg-accent"
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Icon className={`w-6 h-6 mx-auto mb-2 ${
                                  formData.service === service.id ? "text-primary" : "text-muted-foreground"
                                }`} />
                                <span className={`text-sm font-medium block ${
                                  formData.service === service.id ? "text-primary" : "text-foreground"
                                }`}>
                                  {service.name}
                                </span>
                                {formData.service === service.id && (
                                  <motion.div
                                    className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                  >
                                    <Check className="w-3 h-3 text-primary-foreground" />
                                  </motion.div>
                                )}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Ihre Nachricht *
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateField("message", e.target.value)}
                          className="flex min-h-[140px] w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                          placeholder="Beschreiben Sie uns Ihr Projekt..."
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Summary */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          Zusammenfassung Ihrer Anfrage
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">Name:</span>
                            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">E-Mail:</span>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          {formData.phone && (
                            <div>
                              <span className="text-muted-foreground">Telefon:</span>
                              <p className="font-medium">{formData.phone}</p>
                            </div>
                          )}
                          <div>
                            <span className="text-muted-foreground">Leistung:</span>
                            <p className="font-medium">
                              {services.find(s => s.id === formData.service)?.name}
                            </p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Nachricht:</span>
                            <p className="font-medium mt-1">{formData.message}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Privacy Consent Checkbox */}
                      <div className="flex items-start gap-3 p-4 rounded-lg border bg-background">
                        <input
                          type="checkbox"
                          id="privacy-consent"
                          checked={formData.privacyAccepted}
                          onChange={(e) => updateField("privacyAccepted", e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                          required
                        />
                        <label htmlFor="privacy-consent" className="text-sm text-muted-foreground cursor-pointer">
                          Ich habe die{" "}
                          <a href="/datenschutz" target="_blank" className="text-primary hover:underline font-medium">
                            Datenschutzerklärung
                          </a>{" "}
                          gelesen und stimme der Verarbeitung meiner Daten zu. *
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Zurück
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid) || (step === 3 && !isStep3Valid) || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        {step === 3 ? "Absenden" : "Weiter"}
                        {step < 3 && <ArrowRight className="w-4 h-4 ml-2" />}
                      </>
                    )}
                  </Button>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">Erfolgreich gesendet!</p>
                        <p className="text-sm text-green-700 mt-1">Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.</p>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                    >
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="text-red-600">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-red-900">Fehler beim Senden</p>
                        <p className="text-sm text-red-700 mt-1">Es gab ein Problem beim Versenden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </AnimatedSection>

          {/* Info & Map */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>
                <ul className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Anschrift",
                      content: (
                        <span className="text-muted-foreground">Naturpflege Eschenbeck<br />Leibelbach 4<br />91567 Herrieden</span>
                      )
                    },
                    {
                      icon: Mail,
                      title: "E-Mail",
                      content: (
                        <a href="mailto:info@naturpflege-eschenbeck.de" className="text-muted-foreground hover:text-primary transition-colors">info@naturpflege-eschenbeck.de</a>
                      )
                    },
                    {
                      icon: Phone,
                      title: "Telefon",
                      content: (
                        <span className="text-muted-foreground text-sm italic">Telefonnummer folgt</span>
                      )
                    }
                  ].map((item, index) => (
                    <motion.li
                      key={item.title}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <item.icon className="mr-4 h-6 w-6 text-primary shrink-0" />
                      <div>
                        <span className="font-semibold block">{item.title}</span>
                        {item.content}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="h-[300px] w-full rounded-2xl overflow-hidden border shadow-sm relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <MapRaw />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
