export const BOOKSY_URL = "https://booksy.com/es-es/121866_pampa-barber_barberia_48863_barcelona";
export const BOOKSY_SERVICE_URLS: Record<string, string> = {
  "Corte de cabello": `${BOOKSY_URL}?do=book&service=1149477`,
  "Barba Completa": `${BOOKSY_URL}?do=book&service=1149478`,
  "Barba Express": `${BOOKSY_URL}?do=book&service=1149488`,
  "Corte + Barba Completa": `${BOOKSY_URL}?do=book&service=1149491`,
  "Corte + Barba Express": "https://booksy.com/es-es/121866_pampa-barber_barberia_48863_barcelona?do=book&service=1757457",
  "Corte + Barba Completa + Limpieza facial": `${BOOKSY_URL}?do=book&service=1149495`,
  "Corte + Limpieza facial": `${BOOKSY_URL}?do=book&service=1149496`,
  "Cejas": `${BOOKSY_URL}?do=book&service=1149499`,
  "Depilación con cera": `${BOOKSY_URL}?do=book&service=1149504`,
  "Corte jubilado": `${BOOKSY_URL}?do=book&service=1176029`,
};

export function getBooksyServiceUrl(serviceName: string) {
  return BOOKSY_SERVICE_URLS[serviceName] ?? BOOKSY_URL;
}

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/1FYCZyfpktLx4L8q8";
export const GOOGLE_PLACE_ID = "ChIJO_rb-CejpBIRvk2xiSY1kQQ";

export const BOOKSY_RATING = "5.0";
export const BOOKSY_REVIEW_COUNT = 75;
export const GOOGLE_RATING = "4.9";

export const BOOKSY_DESCRIPTION =
  "Barberia en Avinguda Meridiana, 1 (Barcelona) con reserva online 24/7, cortes y barba con atencion al detalle, y valoraciones verificadas de clientes.";

export const BOOKSY_GALLERY_IMAGES = [
  "https://d375139ucebi94.cloudfront.net/region2/es/121866/biz_photo/90957f91ef98499bbdc3a0fa5af429-pampa-barber-biz-photo-fb9271bc6e6a49f6b33c0dae56901d-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/es/121866/biz_photo/dc25ec16b5a74fa69ece731f79e9e7-pampa-barber-biz-photo-a081f8c47fe84c518fe67094fe5028-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/es/121866/inspiration/24d4388e57c6470fb0c1f669a42ddf-pampa-barber-inspiration-db7615960f9c4929a8da69969ebd29-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/es/121866/inspiration/3532717a5d964c1eb22691f029dce1-pampa-barber-inspiration-b9606c19030b416d9ad0cce7a671da-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/es/121866/inspiration/495976668524454292ce8ec5a94773-pampa-barber-inspiration-f9359d75f95a464aada4b984c32184-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/es/121866/inspiration/bdeee54595364cf1b66e3de00eb6b9-pampa-barber-inspiration-24887bc89ecd49188210ac27fd7631-booksy.jpeg",
];

export const BOOKSY_BARBERS = [
  {
    name: "Octavio",
    role: "Barbero",
    badge: "Founder",
    experience: "15 años de experiencia",
    details: "Especialista en diseño. Ha trabajado en varios países del mundo, como Argentina y Portugal.",
    image:
      "https://d375139ucebi94.cloudfront.net/region2/es/121866/resource_photos/f9a12bdd122d405c91b21595d60d91-pampa-barber-octavio-743d61ee9546459db267161616386f-booksy.jpeg",
  },
  {
    name: "Freli",
    role: "Barbero",
    badge: "",
    experience: "10 años de experiencia",
    details: "Especialista en corte y barba con atencion al detalle. Ha trabajado en varios países del mundo, como Ecuador.",
    image:
      "https://d375139ucebi94.cloudfront.net/region2/es/121866/resource_photos/7c917852eca24da395c4634e1ca00a-pampa-barber-freli-6031738ad62344a286d02525896554-booksy.jpeg",
  },
];

export interface ReviewItem {
  name: string;
  barber: string;
  source: "Booksy" | "Google Maps";
  text: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    name: "Joaquin Martinez",
    barber: "Octavio",
    source: "Google Maps",
    text: "Excelente lugar para cortarte el pelo, Octavio un crack, te hace sentir súper cómodo al entrar, te ofrece agua, café. Y se nota su experiencia, simplemente perfecto. Volveré, gracias Octavio. Éxitos.",
  },
  {
    name: "Anonymous",
    barber: "Octavio",
    source: "Booksy",
    text: "Atencion inmejorable, actualizados con los ultimos cortes. Todo perfecto, muy recomendable.",
  },
  {
    name: "Alma Café",
    barber: "Octavio",
    source: "Google Maps",
    text: "Estoy encantado con este descubrimiento. Octavio es muy profesional y ha dado totalmente con el estilo que yo quería. La calidad del corte es inmejorable.",
  },
  {
    name: "Anonymous",
    barber: "Freli",
    source: "Booksy",
    text: "Profesionalidad y muy buen trato.",
  },
  {
    name: "Nacho",
    barber: "Octavio",
    source: "Google Maps",
    text: "Mi experiencia en Pampa fue fantástica. Trabajo por la zona y elegí el mejor lugar para cortarme el pelo. El ambiente es perfecto, muy bien cuidado, y se nota la buena vibra desde que entrás. Octavio me cayó súper bien, y es un grandísimo profesional.",
  },
  {
    name: "Anonymous",
    barber: "Octavio",
    source: "Booksy",
    text: "Increible la atencion y el corte, 10/10.",
  },
  {
    name: "Cillian O Murchu",
    barber: "Freli",
    source: "Google Maps",
    text: "Thanks Frelli. Extremley professional. Excellent cut. Decent price. Cool people.",
  },
  {
    name: "Anonymous",
    barber: "Freli",
    source: "Booksy",
    text: "Increible. Muy buen servicio. Te asesoran y cortan muy bien.",
  },
  {
    name: "Pedro",
    barber: "Octavio",
    source: "Google Maps",
    text: "Recomendado totalmente, Octavio es una persona muy agradable además que se toma su tiempo para conocer a los clientes y se puede ver que tiene gran experiencia. Me ha gustado mucho el corte de pelo que me hizo. Repetiré seguro.",
  },
  {
    name: "Anonymous",
    barber: "Freli",
    source: "Booksy",
    text: "Excelente corte de pelo.",
  },
  {
    name: "Dani Jim",
    barber: "Octavio",
    source: "Google Maps",
    text: "Fui a cortarme el pelo por primera vez y salí encantado. Octavio es un tio muy amable y honesto, me sentí muy cómodo todo el tiempo. Sin duda voy a repetir! El local está genial, la música y el trato. En resumen, un crack!",
  },
  {
    name: "Sergio Escalante",
    barber: "Octavio",
    source: "Google Maps",
    text: "Llevo años buscando una peluquería de confianza y creo que por fin la he encontrado. El servicio fue como si nos conociéramos de toda la vida. Octavio es un tío con una gran atención al detalle y lo más importante el corte quedó de lujo.",
  },
  {
    name: "E P",
    barber: "Octavio",
    source: "Google Maps",
    text: "Muy profesionales, buen trato y corte de pelo. Mi nuevo peluquero de confianza.",
  },
  {
    name: "Truwayne Gordon",
    barber: "Octavio",
    source: "Google Maps",
    text: "First time going to this new shop, and the service was great. Octavio was attentive and did a great fade. The location and shop is a modern barbershop style. All round a great shop at a very reasonable price - you should visit!",
  },
  {
    name: "Pedro Nieto",
    barber: "Octavio",
    source: "Google Maps",
    text: "Recién abierta, cerca de mi casa. Tenía ganas de un barbero por aquí. Octavio sabe bien lo que se hace. Te sugiere y aconseja lo mejor para tu fisionomía, y entonces le dejas hacer. El resultado es magnífico.",
  },
  {
    name: "Anonymous",
    barber: "Freli",
    source: "Booksy",
    text: "Genial.",
  },
];
