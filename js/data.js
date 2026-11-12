/* ==========================================================================
   CONTENIDO DEL PORTAFOLIO
   Todo el texto y las imágenes se editan aquí. Cada texto tiene versión
   { es: "...", en: "..." }. Las imágenes van en assets/img/projects/ y los
   modelos 3D (.glb) en assets/models/.
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
    slug: "interbeing-flock-serpi",
    real: true,
    hoverPhoto: true,
    title: { es: "Colección Interbeing — Flock & Serpi", en: "Interbeing Collection — Flock & Serpi" },
    tagline: { es: "Formas orgánicas, precisión digital.", en: "Organic forms, digital precision." },
    category: { es: "Colección · Modelado orgánico", en: "Collection · Organic modeling" },
    year: "",
    summary: {
      es: "Transformación de formas escultóricas en joyería digital mediante modelado 3D orgánico.",
      en: "Translating sculptural forms into digital jewelry through organic 3D modeling.",
    },
    tags: { es: ["Modelado orgánico", "Interpretación escultórica", "Componentes de joyería"], en: ["Organic Modeling", "Sculptural Translation", "Jewelry Components"] },
    credits: [
      { label: { es: "Diseño", en: "Design" }, value: "Claudia Vallejo" },
      { label: { es: "Mi participación", en: "Role" }, value: { es: "Modelado 3D de joyería y desarrollo técnico", en: "3D Jewelry Modeling & Technical Development" } },
    ],
    cover: "assets/img/projects/serpi-render.webp",
    hover: "assets/img/projects/flock-foto-1.webp",
    overview: {
      es: ["Desarrollado en colaboración con la diseñadora de joyería Claudia Vallejo, este proyecto explora la transformación de formas escultóricas en modelos digitales de joyería. El proceso de modelado se centró en conservar el carácter orgánico, la fluidez y las proporciones de las referencias originales, desarrollando geometrías detalladas adecuadas para la fabricación."],
      en: ["Developed in collaboration with jewelry designer Claudia Vallejo, this project explores the translation of sculptural forms into digital jewelry models. The modeling process focused on preserving the organic character, fluidity, and proportions of the original references while developing detailed geometries suitable for jewelry production."],
    },
    sections: [
      { type: "text", eyebrow: "Flock", title: { es: "De la escultura al modelo digital", en: "From Sculpture to Digital Form" },
        text: { es: "A partir de una referencia escultórica física, Flock se transformó en un modelo tridimensional que conserva el carácter irregular y fluido de la forma original. El desafío consistió en interpretar sus curvas, volúmenes y transiciones mediante una geometría digital precisa.",
                en: "Starting from a physical sculptural reference, Flock was translated into a three-dimensional model that preserves the irregular and fluid character of the original form. The challenge was to interpret its curves, volumes, and transitions within a precise digital geometry." } },
      { type: "grid", items: [
        { src: "assets/img/projects/flock-ceramica.webp", photo: true, caption: { es: "Referencia escultórica en cerámica", en: "Ceramic sculptural reference" } },
        { video: "assets/video/flock-360", caption: { es: "Modelo 3D de Flock en 360°", en: "Flock 3D model in 360°" } },
      ] },
      { type: "model", src: "assets/models/flock.glb", name: "Flock" },
      { type: "grid", items: [
        { src: "assets/img/projects/flock-foto-1.webp", photo: true, caption: { es: "Detalle del collar Flock", en: "Flock necklace detail" } },
        { src: "assets/img/projects/flock-foto-2.webp", photo: true, caption: { es: "Collar Flock terminado", en: "Finished Flock necklace" } },
      ] },
      { type: "text", eyebrow: "Serpi", title: { es: "Cadenas orgánicas", en: "Organic Chains" },
        text: { es: "Serpi explora el desarrollo de eslabones orgánicos curvados, ensamblados para crear una composición continua de joyería. El modelado requirió definir componentes individuales, manteniendo consistencia y continuidad visual a lo largo de la cadena.",
                en: "Serpi explores the development of curved, organic links assembled into a continuous jewelry composition. The modeling process required defining individual components while maintaining consistency and visual continuity throughout the chain." } },
      { type: "grid", items: [
        { src: "assets/img/projects/serpi-ceramica.webp", photo: true, caption: { es: "Referencia escultórica en cerámica", en: "Ceramic sculptural reference" } },
        { video: "assets/video/serpi-360", caption: { es: "Eslabones de Serpi en 360°", en: "Serpi links in 360°" } },
      ] },
      { type: "model", src: "assets/models/serpi.glb", name: "Serpi" },
      { type: "text", title: { es: "Del modelo digital a la joya terminada", en: "From Digital Model to Finished Jewelry" },
        text: { es: "Las piezas finales muestran cómo los conceptos escultóricos pueden transformarse en joyas tangibles mediante el modelado digital y los procesos de fabricación.",
                en: "The final pieces demonstrate how sculptural concepts can be transformed into tangible jewelry through digital modeling and manufacturing processes." } },
      { type: "grid", fill: true, items: [
        { src: "assets/img/projects/serpi-cadenas.webp", photo: true, caption: { es: "Cadenas Serpi en plata y oro", en: "Serpi chains in silver and gold" } },
        { src: "assets/img/projects/serpi-cadenas-detalle.webp", photo: true, caption: { es: "Detalle de los eslabones Serpi", en: "Detail of the Serpi links" } },
      ] },
    ],
  },
  {
    slug: "emerald-bracelet",
    real: true,
    hoverPhoto: true,
    title: { es: "Pulsera de Esmeraldas", en: "Emerald Bracelet" },
    tagline: { es: "Precisión en cada detalle", en: "Precision in Every Detail" },
    category: { es: "Pulsera · Engaste y cierre", en: "Bracelet · Setting & clasp" },
    year: "",
    summary: {
      es: "Modelado técnico 3D de una pulsera con piedras preciosas, enfocado en la distribución de piedras, los detalles estructurales y el desarrollo del cierre.",
      en: "Technical 3D modeling of a gemstone bracelet, focusing on stone arrangement, structural details, and clasp development.",
    },
    tags: { es: ["Modelado técnico 3D", "Distribución de piedras", "Construcción de pulseras", "Detalles del cierre"], en: ["Technical 3D Modeling", "Stone Arrangement", "Bracelet Construction", "Clasp Details"] },
    credits: [
      { label: { es: "Mi participación", en: "Role" }, value: { es: "Modelado 3D de joyería y desarrollo técnico", en: "3D Jewelry Modeling & Technical Development" } },
    ],
    cover: "assets/img/projects/bracelet-render-completo.webp",
    hover: "assets/img/projects/bracelet-muneca.webp",
    overview: {
      es: ["Este proyecto se centra en el desarrollo técnico 3D de una pulsera de esmeraldas, combinando repetición geométrica, distribución de piedras y consideraciones estructurales. El proceso de modelado requirió especial atención a las proporciones, la alineación y la relación entre los diferentes componentes.",
           "Se prestó especial atención a la construcción de la pulsera y los detalles del cierre, buscando equilibrar la consistencia visual con los requerimientos funcionales de una pieza de uso cotidiano."],
      en: ["This project focuses on the technical 3D development of an emerald bracelet, combining geometric repetition, stone arrangement, and structural considerations. The modeling process required careful attention to proportions, alignment, and the relationship between individual components.",
           "Special emphasis was placed on the bracelet's construction and clasp details, balancing visual consistency with the functional requirements of a wearable piece."],
    },
    sections: [
      { type: "photo", src: "assets/img/projects/bracelet-render.webp", caption: { es: "Vista general del modelo: engastes y eslabones", en: "Overall view of the model: settings and links" }, wide: true },
      { type: "grid", items: [
        { src: "assets/img/projects/bracelet-broche.webp", caption: { es: "Render del cierre", en: "Clasp render" } },
        { src: "assets/img/projects/bracelet-cierre-foto.webp", photo: true, caption: { es: "Pulsera terminada con su cierre", en: "Finished bracelet with its clasp" } },
      ] },
      { type: "model", src: "assets/models/emerald-bracelet.glb" },
      { type: "photo", narrow: true, src: "assets/img/projects/bracelet-muneca.webp", title: { es: "La pieza terminada", en: "The finished piece" }, caption: { es: "Pulsera de Esmeraldas en uso", en: "Emerald Bracelet worn" } },
    ],
  },
  {
    // Proyecto real (textos de la guía de implementación)
    slug: "onyx-ring",
    real: true,
    title: { es: "Onyx Ring — Carré Setting", en: "Onyx Ring — Carré Setting" },
    pageTitle: { es: "Anillo de Ónix", en: "Onyx Ring" },
    tagline: { es: "Engaste Carré y precisión geométrica", en: "Carré Setting & Geometric Precision" },
    category: { es: "Anillo · Engaste Carré", en: "Ring · Carré setting" },
    year: "",
    summary: {
      es: "Modelado 3D de joyería de precisión, con énfasis en engastes, proporciones y detalles geométricos.",
      en: "Precision 3D jewelry modeling with an emphasis on stone setting, proportions, and geometric detailing.",
    },
    tags: { es: ["Modelado de precisión", "Engastes", "Desarrollo geométrico"], en: ["Precision Modeling", "Stone Settings", "Geometric Development"] },
    credits: [
      { label: { es: "Mi participación", en: "Role" }, value: { es: "Modelado 3D de joyería y desarrollo técnico", en: "3D Jewelry Modeling & Technical Development" } },
    ],
    cover: "assets/img/projects/onyx-render-1.webp",
    hover: "assets/img/projects/onyx-render-2.webp",
    overview: {
      es: ["Este proyecto destaca el desarrollo técnico de un anillo con piedras, haciendo énfasis en el control geométrico, la ubicación de las gemas y la construcción detallada de los engastes.",
           "El proceso de modelado 3D incluyó el ajuste de proporciones y la integración de los engastes en la estructura general, buscando un diseño coherente. El proyecto demuestra la importancia de la precisión en el desarrollo digital de joyería, donde incluso los pequeños detalles geométricos influyen en el resultado final."],
      en: ["This project highlights the technical development of a gemstone ring, with a focus on controlled geometry, stone placement, and detailed setting construction.",
           "The 3D modeling process involved refining proportions and integrating the setting into the overall structure to achieve a cohesive design. The project demonstrates the importance of precision in digital jewelry development, where even small geometric details influence the final result."],
    },
    // Secuencia visual de la página (en este orden)
    sections: [
      { type: "grid", items: [
        { src: "assets/img/projects/onyx-render-2.webp", caption: { es: "Vista general del anillo", en: "Overall view of the ring" } },
        { src: "assets/img/projects/onyx-render-3.webp", caption: { es: "Detalle de la estructura de los engastes", en: "Detail of the setting structure" } },
      ] },
      { type: "model", src: "assets/models/onyx-ring.glb" },
      { type: "photo", src: "assets/img/projects/onyx-foto.webp", title: { es: "La pieza fabricada", en: "The finished piece" }, caption: { es: "Anillo de Ónix fabricado", en: "Finished Onyx Ring" } },
    ],
  },
  {
    slug: "sapphire-cross",
    real: true,
    title: { es: "Cruz con Zafiros", en: "Sapphire Cross" },
    tagline: { es: "De la referencia a la realidad", en: "From Reference to Reality" },
    category: { es: "Dije · Engaste de zafiros", en: "Pendant · Sapphire setting" },
    year: "",
    summary: {
      es: "De la referencia del cliente a un modelo 3D detallado, conectando la interpretación del diseño con su fabricación.",
      en: "From a client's reference to a detailed 3D jewelry model, bridging design interpretation and manufacturing.",
    },
    tags: { es: ["Interpretación de referencias", "Modelado 3D de joyería", "Desarrollo técnico"], en: ["Reference Interpretation", "3D Jewelry Modeling", "Technical Development"] },
    credits: [
      { label: { es: "Mi participación", en: "Role" }, value: { es: "Modelado 3D de joyería y desarrollo técnico", en: "3D Jewelry Modeling & Technical Development" } },
    ],
    cover: "assets/img/projects/cross-render-1.webp",
    hover: "assets/img/projects/cross-render-2.webp",
    overview: {
      es: ["Este proyecto consistió en transformar una referencia inicial proporcionada por el cliente en un modelo tridimensional detallado de joyería. El proceso de desarrollo se centró en interpretar el concepto original, definir las proporciones y construir la geometría necesaria para la pieza.",
           "La evolución desde la referencia inicial hasta el modelo digital y el trabajo de fabricación demuestra la relación entre el modelado técnico y la producción de joyería."],
      en: ["This project involved translating a client's initial design reference into a detailed three-dimensional jewelry model. The development process focused on interpreting the original concept, defining proportions, and constructing the geometry required for the piece.",
           "The progression from initial reference to digital model and workshop production illustrates the relationship between technical modeling and jewelry manufacturing."],
    },
    sections: [
      { type: "grid", items: [
        { src: "assets/img/projects/cross-boceto.webp", photo: true, caption: { es: "Referencia inicial del cliente: boceto y zafiros", en: "Client's initial reference: sketch and sapphires" } },
        { src: "assets/img/projects/cross-render-2.webp", caption: { es: "Modelo digital: volumen y engastes", en: "Digital model: volume and settings" } },
      ] },
      { type: "model", src: "assets/models/sapphire-cross.glb" },
      { type: "photo", src: "assets/img/projects/cross-taller.webp", title: { es: "En el taller", en: "In the workshop" }, caption: { es: "Proceso de fabricación en taller", en: "Workshop manufacturing process" } },
    ],
  },
  {
    slug: "interbeing-bangle",
    real: true,
    hoverPhoto: true,
    title: { es: "Interbeing Bangle with Knob", en: "Interbeing Bangle with Knob" },
    pageTitle: { es: "Interbeing — Bangle with Knob", en: "Interbeing — Bangle with Knob" },
    tagline: { es: "Geometría escultórica en 3D", en: "Sculptural Geometry in 3D" },
    category: { es: "Brazalete · Geometría orgánica", en: "Bangle · Organic geometry" },
    year: "",
    summary: {
      es: "Exploración de geometrías orgánicas complejas mediante modelado digital y desarrollo de joyería escultórica.",
      en: "Exploring complex organic geometry through digital modeling and sculptural jewelry development.",
    },
    tags: { es: ["Geometría orgánica", "Desarrollo de superficies", "Modelado escultórico"], en: ["Organic Geometry", "Surface Development", "Sculptural Modeling"] },
    credits: [
      { label: { es: "Diseño de joyería", en: "Jewelry Design" }, value: "Claudia Vallejo" },
      { label: { es: "Mi participación", en: "Role" }, value: { es: "Modelado 3D de joyería", en: "3D Jewelry Modeling" } },
    ],
    cover: "assets/img/projects/bangle-render.webp",
    hover: "assets/img/projects/bangle-producto.webp",
    overview: {
      es: ["Como parte de la colección Interbeing de Claudia Vallejo, esta pieza explora la relación entre formas orgánicas fluidas y modelado digital de precisión.",
           "Su desarrollo requirió transformar un concepto de joyería escultórica en geometría tridimensional, conservando su carácter visual distintivo. El proyecto destaca el uso de herramientas digitales para desarrollar superficies complejas, volúmenes curvos y formas continuas."],
      en: ["Part of Claudia Vallejo's Interbeing collection, this piece explores the relationship between fluid organic shapes and precise digital modeling.",
           "The development required translating a sculptural jewelry concept into three-dimensional geometry while maintaining its distinctive visual character. The project highlights the use of digital modeling tools to develop complex surfaces, curved volumes, and continuous forms."],
    },
    sections: [
      { type: "photo", src: "assets/img/projects/bangle-producto.webp", caption: { es: "Brazaletes Interbeing en oro y plata", en: "Interbeing bangles in gold and silver" } },
      { type: "photo", src: "assets/img/projects/bangle-rhino.webp", caption: { es: "Vistas de modelado en Rhinoceros", en: "Modeling views in Rhinoceros" }, wide: true },
      { type: "model", src: "assets/models/interbeing-bangle.glb" },
      { type: "photo", src: "assets/img/projects/bangle-modelo.webp", title: { es: "La pieza en uso", en: "The piece in context" }, caption: { es: "Brazaletes Interbeing en uso", en: "Interbeing bangles worn" }, wide: true },
    ],
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
  religiosa: { es: "Dijes", en: "Pendants" },
  aretes: { es: "Aretes", en: "Earrings" },
  sets: { es: "Sets", en: "Sets" },
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
    { img: "assets/img/gallery/aretes-corazon-halo.webp?v=20261110164743", cat: "aretes", title: { es: "Aretes Topos y Jackets Corazón", en: "Heart Studs & Jackets Earrings" } },
    { img: "assets/img/gallery/dije-casco-hockey.webp?v=20261110164743", cat: "religiosa", title: { es: "Dije Casco", en: "Helmet Pendant" } },
    { img: "assets/img/gallery/dije-corazon-rubi.webp?v=20261110164743", cat: "religiosa", title: { es: "Dije Corazón", en: "Heart Pendant" } },
    { img: "assets/img/gallery/dije-reja.webp?v=20261110164743", cat: "religiosa", title: { es: "Dije Malla", en: "Mesh Pendant" } },
    { img: "assets/img/gallery/set-piedras-colores.webp?v=20261110164743", cat: "sets", title: { es: "Polished Gold Emerald Jewelry Set", en: "Polished Gold Emerald Jewelry Set" } },
  ];

  return real;
})();
