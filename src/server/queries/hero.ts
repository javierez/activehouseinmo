import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (): string[] => {
  return ["La Ràpita", "Santa Bàrbara"];
}

// Using React cache to memoize the query
export const getHeroProps = (): HeroProps | null => {
  return {
  "title": "Encuentra tu hogar ideal o vende tu vivienda con confianza",
  "subtitle": "Expertos inmobiliarios en La Ràpita, Vinaròs, Benicarló y Peñíscola. Te acompañamos en todo el proceso de compra, venta o alquiler con un servicio cercano y profesional.",
  "backgroundImage": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/135/hero/background_UOZMu4dd.jpg",
  "backgroundVideo": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/135/hero/background_Zs96jc57.mp4",
  "backgroundType": "video",
  "findPropertyButton": "Explorar Propiedades",
  "contactButton": "Contáctanos"
};
}
