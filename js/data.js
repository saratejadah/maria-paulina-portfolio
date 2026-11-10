/* ==========================================================================
   CONTENIDO DEL PORTAFOLIO
   Todo el texto y las imágenes se editan aquí. Cada texto tiene versión
   { es: "...", en: "..." }. Las imágenes van en assets/img/projects/ y los
   modelos 3D (.glb) en assets/models/.
   ⚠️ Las imágenes y modelos actuales son DE EJEMPLO: reemplazar por renders reales.
   ========================================================================== */

window.SITE = {
  name: "Maria Paulina",
  fullName: "María Paulina Villegas",
  whatsapp: "573178952735",
  email: "mpvillegasp@gmail.com",
  instagram: "mariap3d",
  linkedin: "https://linkedin.com/in/maria-paulina-villegas",
  cv: { es: "assets/cv/CV-Maria-Paulina-Villegas-ES.pdf", en: "assets/cv/CV-Maria-Paulina-Villegas-EN.pdf" },
  // Foto de ella para "Sobre mí" (dejar vacío "" para mostrar las iniciales)
  portrait: "assets/img/maria-paulina.webp?v=202611100412",
};

/* --------------------------------------------------------------------------
   PROYECTOS DESTACADOS (5) — se muestran en el inicio y tienen página propia
   -------------------------------------------------------------------------- */
window.PROJECTS = [
  {
    slug: "interbeing",
    title: { es: "Interbeing", en: "Interbeing" },
    category: { es: "Pulsera · Mecanismo de cierre", en: "Bracelet · Clasp mechanism" },
    year: "",
    summary: {
      es: "Una pulsera construida a partir de pétalos digitales, donde el reto fue diseñar un cierre que se sintiera parte de la pieza.",
      en: "A bracelet built from digital petals, where the challenge was designing a clasp that feels like part of the piece.",
    },
    tags: ["Rhinoceros", "Grasshopper Gold", "KeyShot"],
    cover: "assets/img/projects/interbeing-cover.webp",
    hover: "assets/img/projects/interbeing-c.webp",
    model: "assets/models/interbeing.glb",
    overview: {
      es: ["Interbeing parte de un conjunto de pétalos ya modelados. Mi trabajo fue convertirlos en una pulsera que se pudiera fabricar: definir cómo se unen los módulos, cómo se mueven y cómo cierra la pieza.",
           "El cierre se codiseñó con la diseñadora para que quedara escondido dentro del ritmo de los pétalos, sin romper la lectura de la pulsera."],
      en: ["Interbeing starts from a set of existing petal models. My role was to turn them into a manufacturable bracelet: defining how the modules connect, how they move and how the piece closes.",
           "The clasp was co-designed with the designer so it would hide within the rhythm of the petals without breaking the bracelet's flow."],
    },
    blocks: [
      { images: ["assets/img/projects/interbeing-a.webp", "assets/img/projects/interbeing-b.webp"],
        captions: { es: ["Estudio de eslabón", "Detalle del mecanismo"], en: ["Link study", "Mechanism detail"] } },
    ],
    result: { image: "assets/img/projects/interbeing-cover.webp", caption: { es: "Render final", en: "Final render" } },
  },
  {
    slug: "escultorica",
    title: { es: "Flock & Serpi", en: "Flock & Serpi" },
    category: { es: "Colección · De arcilla a digital", en: "Collection · From clay to digital" },
    year: "",
    summary: {
      es: "Esculturas en arcilla traducidas a geometría digital: módulos repetitivos que se convierten en una colección de joyería contemporánea.",
      en: "Clay sculptures translated into digital geometry: repeating modules that become a contemporary jewelry collection.",
    },
    tags: ["Rhinoceros", "ZBrush", "Grasshopper"],
    cover: "assets/img/projects/escultorica-cover.webp",
    hover: "assets/img/projects/escultorica-c.webp",
    model: "assets/models/escultorica.glb",
    overview: {
      es: ["Una colección que nace de piezas hechas a mano en arcilla. El reto fue conservar la huella de la escultura y, al mismo tiempo, obtener modelos limpios y listos para producción.",
           "Desarrollé módulos repetitivos que se adaptan a distintas tipologías: anillos, dijes y aretes de la misma familia."],
      en: ["A collection born from hand-made clay pieces. The challenge was keeping the sculptural feel while getting clean, production-ready models.",
           "I developed repeating modules that adapt to different typologies: rings, pendants and earrings from the same family."],
    },
    blocks: [
      { images: ["assets/img/projects/escultorica-a.webp", "assets/img/projects/escultorica-b.webp"],
        captions: { es: ["Vista frontal", "Volumen y textura"], en: ["Front view", "Volume and texture"] } },
    ],
    result: { image: "assets/img/projects/escultorica-cover.webp", caption: { es: "Pieza de la colección", en: "Piece from the collection" } },
  },
  {
    slug: "halo",
    title: { es: "Constelación", en: "Constellation" },
    category: { es: "Anillo · Engaste pavé", en: "Ring · Pavé setting" },
    year: "",
    summary: {
      es: "Un anillo con decenas de piedras en engaste pavé, calculado para que cada una quede bien sujeta y a la misma altura.",
      en: "A ring with dozens of pavé-set stones, calculated so each one sits securely at the same height.",
    },
    tags: ["Grasshopper Gold", "Peacock", "Rhinoceros"],
    cover: "assets/img/projects/halo-cover.webp",
    hover: "assets/img/projects/halo-c.webp",
    model: "assets/models/halo.glb",
    overview: {
      es: ["Los anillos con muchos engastes exigen precisión: distribución de piedras, grosor de metal, uñas y asientos.",
           "Con Grasshopper Gold, la distribución es paramétrica: si cambia la talla o el tamaño de piedra, el anillo se ajusta sin rehacer el modelo."],
      en: ["Rings with many settings demand precision: stone layout, metal thickness, prongs and seats.",
           "With Grasshopper Gold the layout is parametric: if the ring size or stone size changes, the model adapts without being rebuilt."],
    },
    blocks: [
      { images: ["assets/img/projects/halo-a.webp", "assets/img/projects/halo-b.webp"],
        captions: { es: ["Vista lateral", "Detalle del pavé"], en: ["Side view", "Pavé detail"] } },
    ],
    result: { image: "assets/img/projects/halo-cover.webp", caption: { es: "Render final", en: "Final render" } },
  },
  {
    slug: "ceramica",
    title: { es: "Porcelana", en: "Porcelain" },
    category: { es: "Joyería a partir de cerámica", en: "Jewelry from ceramics" },
    year: "",
    summary: {
      es: "Objetos de cerámica que se transforman en joyas: el metal abraza la pieza original y la convierte en algo para llevar puesto.",
      en: "Ceramic objects transformed into jewelry: the metal embraces the original piece and turns it into something wearable.",
    },
    tags: ["Rhinoceros", "Escaneo 3D", "KeyShot"],
    cover: "assets/img/projects/ceramica-cover.webp",
    hover: "assets/img/projects/ceramica-c.webp",
    model: "assets/models/ceramica.glb",
    overview: {
      es: ["El punto de partida es un objeto que ya existe. Lo digitalizo, estudio su forma y diseño la estructura de metal que lo sostiene sin ocultarlo.",
           "El resultado une dos oficios: la cerámica y la joyería."],
      en: ["The starting point is an object that already exists. I digitize it, study its shape and design the metal structure that holds it without hiding it.",
           "The result brings two crafts together: ceramics and jewelry."],
    },
    blocks: [
      { images: ["assets/img/projects/ceramica-a.webp", "assets/img/projects/ceramica-b.webp"],
        captions: { es: ["Estudio de la forma", "Montura en metal"], en: ["Form study", "Metal mount"] } },
    ],
    result: { image: "assets/img/projects/ceramica-cover.webp", caption: { es: "Render final", en: "Final render" } },
  },
  {
    slug: "cruz",
    title: { es: "Cruz Aurora", en: "Aurora Cross" },
    category: { es: "Dije · Cruz con engastes", en: "Pendant · Set cross" },
    year: "",
    summary: {
      es: "Una cruz de proporciones suaves con una esmeralda central, pensada para producirse en serie sin perder el detalle.",
      en: "A softly proportioned cross with a central emerald, designed for series production without losing detail.",
    },
    tags: ["Rhinoceros", "Grasshopper Gold", "Chitubox"],
    cover: "assets/img/projects/cruz-cover.webp",
    hover: "assets/img/projects/cruz-c.webp",
    model: "assets/models/cruz.glb",
    overview: {
      es: ["Las cruces son de las piezas más pedidas. Esta versión busca un equilibrio entre lo clásico y lo contemporáneo.",
           "El archivo se preparó para impresión en resina, con soportes y orientación pensados para obtener la mejor superficie."],
      en: ["Crosses are among the most requested pieces. This version balances classic and contemporary.",
           "The file was prepared for resin printing, with supports and orientation chosen for the best surface finish."],
    },
    blocks: [
      { images: ["assets/img/projects/cruz-a.webp", "assets/img/projects/cruz-b.webp"],
        captions: { es: ["Vista frontal", "Perfil"], en: ["Front view", "Profile"] } },
    ],
    result: { image: "assets/img/projects/cruz-cover.webp", caption: { es: "Render final", en: "Final render" } },
  },
];

/* --------------------------------------------------------------------------
   GALERÍA — variedad de proyectos. Categorías: anillos, dijes, pulseras,
   organico, religiosa. Para agregar una pieza, copiar una línea.
   -------------------------------------------------------------------------- */
window.CATEGORIES = {
  all: { es: "Todo", en: "All" },
  anillos: { es: "Anillos y engastes", en: "Rings & settings" },
  organico: { es: "Orgánico", en: "Organic" },
  pulseras: { es: "Pulseras y eslabones", en: "Bracelets & links" },
  religiosa: { es: "Cruces y dijes", en: "Crosses & pendants" },
};

window.GALLERY = (() => {
  // Piezas de Maria Paulina. Para agregar una: poner la imagen (ideal sin fondo, .webp) en
  // assets/img/gallery/ y copiar una línea.
  const real = [
    { img: "assets/img/gallery/anillo-ancla.webp?v=20261108022318", cat: "anillos", title: { es: "Anillo Ancla", en: "Anchor Ring" } },
    { img: "assets/img/gallery/anillo-corona.webp?v=20261108022318", cat: "anillos", title: { es: "Anillo Corona Marquise", en: "Marquise Crown Ring" } },
    { img: "assets/img/gallery/anillo-luna-ballena.webp?v=20261108022318", cat: "organico", title: { es: "Golden Crescent Whale Vine Ring", en: "Golden Crescent Whale Vine Ring" } },
    { img: "assets/img/gallery/anillo-cupula-zafiros.webp?v=20261108022318", cat: "anillos", title: { es: "Anillo Domo Zafiros", en: "Sapphire Dome Ring" } },
    { img: "assets/img/gallery/dije-sagitario.webp?v=20261108022318", cat: "religiosa", title: { es: "Sagitario", en: "Sagittarius" } },
  ];

  return real;
})();
