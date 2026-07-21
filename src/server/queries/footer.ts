
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (): FooterProps | null => {
  return {
  "companyName": "Active House Inmo Cisama SL",
  "description": "Active House Inmobiliaria es una agencia especializada en la compraventa y alquiler de inmuebles en Montsià y Baix Maestrat. Ayudamos a propietarios, compradores e inversores con un servicio cercano, transparente y profesional. Trabajamos en La Ràpita, Santa Bàrbara, Amposta, Alcanar, Vinaròs, Benicarló y poblaciones cercanas.",
  "socialLinks": {
  "facebook": "https://www.facebook.com/activehouseinmo",
  "instagram": "https://www.instagram.com/activehouseinmo/"
},
  "officeLocations": [{
  "name": "Oficina La Ràpita",
  "address": ["Calle Santander 60, bajos (local comercial)", "La Ràpita, Tarragona"],
  "phone": "602674314",
  "email": "activehouseinmo@gmail.com"
}, {
  "name": "Oficina Santa Bàrbara",
  "address": ["Carrer Major 36", "Santa Bàrbara, Tarragona"],
  "phone": "622598519",
  "email": "activehouseinmo@gmail.com"
}],
  "quickLinksVisibility": {
  "inicio": true,
  "propiedades": true,
  "nosotros": true,
  "reseñas": false,
  "contacto": true,
  "comprar": false,
  "alquilar": false,
  "vender": false
},
  "propertyTypesVisibility": {
  "pisos": true,
  "casas": true,
  "locales": true,
  "solares": true,
  "garajes": true
},
  "copyright": "© 2026 Active House Inmo. Todos los derechos reservados."
};
}
