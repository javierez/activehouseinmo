
import {
  type CardDisplayConfig,
  DEFAULT_CARD_DISPLAY,
  resolveCardDisplay,
} from "~/lib/card-display";

export type LinkItem = {
  title: string;
  url: string;
};

export type LinkCategory = {
  name: string;
  links: LinkItem[];
};

export const getLinksProps = (): LinkCategory[] => {
  return [];
}

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  questions: FaqItem[];
};

export const getFaqsProps = (): FaqCategory[] => {
  return [];
}

/**
 * Per-account website feature flags + light config. Stored as a JSON string in
 * `website_config.features_props`. Every field is optional; when undefined the
 * caller falls back to the historical default, so a null column = today's behavior.
 */
export type FeaturesProps = {
  pages?: {
    promociones?: boolean;
    servicios?: boolean;
    nosotros?: boolean;
  };
  sections?: {
    socialFamily?: boolean;
  };
  menuLabels?: {
    segundaMano?: string;
    alquilar?: string;
    inversion?: string;
    inversionSubtitle?: string;
    inversionHref?: string;
    vender?: string;
    /** Label for the contact CTA / titles (e.g. "Contacto"). Default "Contáctanos". */
    contacto?: string;
  };
  /** Hero shows direct Venta/Alquiler access buttons instead of the search bar. */
  heroDirectAccess?: boolean;
  /** Navbar Venta/Alquiler are direct links (no property-type mega-menu). */
  navDirectLinks?: boolean;
  /** Show the "Buscar por referencia" search in the navbar. Default true. */
  referenceSearch?: boolean;
  /** Show the bottom call-to-action on the /servicios page. Default true. */
  serviciosCta?: boolean;
  /** Contact CTA shows only the button (no heading/blurb). Default false. */
  contactCtaMinimal?: boolean;
  logoSize?: "standard" | "large" | "xlarge";
  /** Hero section height: "standard" (~88vh) or "full" (fills the screen). */
  heroSize?: "standard" | "full";
  /**
   * Hero banner height on the inner pages (/servicios, /nosotros):
   * "short" (~50vh) | "standard" (~75vh, default) | "full" (fills the screen).
   */
  pageHeroSize?: "short" | "standard" | "full";
  /**
   * "minimal" hides the small uppercase kicker above section titles and the
   * subtitle below them, site-wide, for a cleaner look. Defaults to "standard".
   */
  headerStyle?: "standard" | "minimal";
  /** When true, footer navigation renders as cards and the property-types column is hidden. */
  footerCards?: boolean;
  /**
   * Text alignment for description/paragraph blocks (service-card descriptions,
   * About/Nosotros body, property descriptions). Unset → keep each block's
   * existing alignment; "justify"/"center" override it site-wide.
   */
  descriptionAlign?: "justify" | "center";
  /**
   * Property-detail "Características" section layout.
   * "sections" (default) → grouped with section titles and the
   * "Ver más características" toggle. "flat" → every detail row in one block
   * and every feature chip in another, with no section titles or toggle.
   */
  characteristicsLayout?: "sections" | "flat";
  /**
   * Visual style of the property-detail characteristics.
   * "default" (today) | "boxed" (stat cards) | "emphasized" (stacked rows with
   * stronger hierarchy) | "twotone" (filled panel with alternating row shading).
   */
  characteristicsStyle?: "default" | "boxed" | "emphasized" | "twotone";
};

/** Read the legacy `metadata.modules.promotions` flag (older accounts gated /promociones here). */
function readLegacyPromotions(metadata: string | null | undefined): boolean | undefined {
  if (!metadata) return undefined;
  try {
    const raw =
      typeof metadata === "string" ? (JSON.parse(metadata) as unknown) : metadata;
    const modules =
      raw && typeof raw === "object" && "modules" in raw
        ? (raw as { modules?: { promotions?: unknown } }).modules
        : undefined;
    return modules?.promotions === true ? true : undefined;
  } catch {
    return undefined;
  }
}

export const getFeaturesProps = (): FeaturesProps => {
  return {
  "pages": {
  "servicios": true,
  "promociones": false
},
  "menuLabels": {
  "segundaMano": "Venta",
  "alquilar": "Alquiler",
  "vender": "¿Quieres vender?",
  "inversion": ""
}
};
}

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

// Thin wrapper kept for existing callers; promotions now lives in features_props
// (with legacy metadata.modules.promotions folded in by getFeaturesProps).
export const getModulesConfig = (): ModulesConfig => {
  return {
  "promotionsEnabled": false
};
}

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  defaultSort?: string;
  showDescription?: boolean;
  showReference?: boolean;
  cardDisplay: CardDisplayConfig;
};

export const getPropertiesConfig = (): PropertiesConfig => {
  return {
  "title": "Propiedades Destacadas",
  "subtitle": "Descubre nuestra selección de propiedades disponibles",
  "buttonText": "Ver Todas las Propiedades",
  "cardDisplay": {
  "cardTitle": "listing",
  "cardEyebrow": "location",
  "cardLocationField": "province"
}
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const getSEOConfig = (): SEOConfig => {
  return {
  "title": "Inmobiliaria en La Ràpita, Montsià y Baix Maestrat | Active House",
  "description": "Active House Inmobiliaria te ayuda a comprar, vender y alquilar viviendas en La Ràpita, Santa Bàrbara, Amposta, Vinaròs, Benicarló y Baix Maestrat. Valoración gratuita, asesoramiento profesional y gestión integral.",
  "keywords": "inmobiliaria, la ràpita,sant carles de la ràpita, montsià, baix maestrat, vinaròs, benicarló, vender vivienda la ràpita, vender casa vinaròs, comprar piso la ràpita, comprar casa benicarló, inmobiliaria santa bàrbara, inmobiliaria amposta, pisos en venta la ràpita, casas en venta vinaròs, active house inmobiliaria",
  "name": "Active House Inmo",
  "email": "activehouseinmo@gmail.com",
  "telephone": "602674314",
  "url": "https://www.activehouseinmo.es/",
  "ogTitle": "Active House Inmo",
  "ogDescription": "Inmobiliaria en La Ràpita especializada en compraventa y alquiler en el Montsià, Vinaròs, Benicarló y Peñíscola. Servicio cercano y profesional.",
  "ogImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/135/og/1780495295809_5f0IBz.jpg",
  "ogType": "website",
  "ogUrl": "",
  "ogLocale": "es_ES",
  "ogSiteName": "Active House Inmo"
};
}
