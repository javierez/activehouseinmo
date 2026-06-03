

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina La Ràpita",
  "address": {
  "street": "Calle Santander 60, bajos (local comercial)",
  "city": "La Ràpita",
  "state": "Tarragona",
  "country": "España"
},
  "phoneNumbers": {
  "main": "602674314"
},
  "emailAddresses": {
  "info": "activehouseinmo@gmail.com"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00–13:00 y 16:00–19:30",
  "saturday": "Sábado: 10:00–13:00",
  "sunday": "Domingo: Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calle%20Santander%2060%2C%20bajos%20(local%20comercial)%2C%20La%20R%C3%A0pita%2C%20Tarragona%2C%2043540",
  "isDefault": true
}, {
  "id": "office-2",
  "name": "Oficina Santa Bàrbara",
  "address": {
  "street": "Carrer Major 36",
  "city": "Santa Bàrbara",
  "state": "Tarragona",
  "country": "España"
},
  "phoneNumbers": {
  "main": "622598519"
},
  "emailAddresses": {
  "info": "activehouseinmo@gmail.com"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00–13:00 y 16:00–19:30",
  "saturday": "Sábado: 10:00–13:00",
  "sunday": "Domingo: Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Carrer%20Major%2036%2C%20Santa%20B%C3%A0rbara%2C%20Tarragona%2C%2043570",
  "isDefault": false
}]
};
}

