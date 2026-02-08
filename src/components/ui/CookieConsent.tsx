"use client";

import { useEffect } from "react";
import { run, show, reset } from "vanilla-cookieconsent";
import { config } from "@/lib/cookie-consent-config";

export default function CookieConsentComponent() {
  useEffect(() => {
    run(config);
  }, []);

  return null;
}
