import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const config: CookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false,
        },
    },
    categories: {
        necessary: {
            readOnly: true,
            enabled: true,
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/, // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: "_gid", // string: exact cookie name
                    },
                ],
            },
        },
    },
    language: {
        default: "de",
        translations: {
            de: {
                consentModal: {
                    title: "Wir verwenden Cookies",
                    description:
                        "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer:
                        '<a href="/impressum">Impressum</a>\n<a href="/datenschutz">Datenschutzerklärung</a>',
                },
                preferencesModal: {
                    title: "Cookie-Einstellungen verwalten",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modale schließen",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie-Nutzung",
                            description:
                                "Wir verwenden Cookies, um grundlegende Funktionen der Website sicherzustellen und um Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie diese zulassen möchten oder nicht.",
                        },
                        {
                            title: "Notwendige Cookies",
                            description:
                                "Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.",
                            linkedCategory: "necessary",
                        },
                        {
                            title: "Analyse-Cookies",
                            description:
                                "Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten werden anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.",
                            linkedCategory: "analytics",
                        },
                    ],
                },
            },
        },
    },
};
