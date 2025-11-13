// SEO configuration for Creavvy
export const SEO_CONFIG = {
  siteName: "Creavvy",
  title: "Creavvy - Transformez votre code en contenu viral",
  description:
    "Créez des visuels de code, des captures d'écran stylisées et des posts techniques parfaits pour les réseaux sociaux en quelques secondes.",
  keywords: [
    "création de contenu",
    "code snippet",
    "capture d'écran",
    "réseaux sociaux",
    "développeurs",
    "créateurs tech",
    "visuels",
    "design",
    "outils de développement",
  ],
  author: "Creavvy Team",
  baseUrl: "https://creavvy.laclass.dev", // Production URL
  locale: "fr_FR",
  image: "/home/screen.png",
  imageAlt:
    "Aperçu de l'interface de Creavvy montrant la création de visuels de code",
  twitter: {
    site: "@creavvy",
    creator: "@creavvy",
    card: "summary_large_image",
  },
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: "Creavvy - Transformez votre code en contenu viral",
    description:
      "Créez des visuels de code, des captures d'écran stylisées et des posts techniques parfaits pour les réseaux sociaux en quelques secondes.",
    path: "/",
    image: "/home/screen.png",
    imageAlt:
      "Aperçu de l'interface de Creavvy montrant la création de visuels de code",
  },
  contact: {
    title: "Contactez-nous - Creavvy",
    description:
      "Une question ? Besoin d'aide ? Contactez l'équipe Creavvy pour obtenir de l'assistance.",
    path: "/contact",
    image: "/home/screen.png",
    imageAlt: "Page de contact de Creavvy",
  },
};

// Structured data for rich results
export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Creavvy",
    url: "https://creavvy.laclass.dev",
    logo: "https://creavvy.laclass.dev/home/screen.png",
    sameAs: [
      "https://twitter.com/creavvy",
      "https://github.com/bellandry/creavvy",
      "https://linkedin.com/company/creavvy",
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Creavvy",
    url: "https://creavvy.laclass.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://creavvy.laclass.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};
