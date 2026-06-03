

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

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

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
};

export const getPropertiesConfig = (): PropertiesConfig => {
  return {
  "title": "Propiedades Destacadas",
  "subtitle": "Descubre nuestra selección de propiedades disponibles",
  "buttonText": "Ver Todas las Propiedades"
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
  "keywords": "inmobiliaria la ràpita, inmobiliaria sant carles de la ràpita, inmobiliaria montsià, inmobiliaria baix maestrat, inmobiliaria vinaròs, inmobiliaria benicarló, vender vivienda la ràpita, vender casa vinaròs, comprar piso la ràpita, comprar casa benicarló, inmobiliaria santa bàrbara, inmobiliaria amposta, pisos en venta la ràpita, casas en venta vinaròs, active house inmobiliaria",
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
