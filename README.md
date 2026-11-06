# Maria Paulina — Portafolio de diseño 3D de joyería

Sitio estático (HTML, CSS y JS, sin build) pensado para publicarse en Netlify.

## Estructura
- `index.html`: inicio con proyectos destacados, galería, sobre mí y contacto.
- `project.html?p=<slug>`: página de detalle de cada proyecto destacado.
- `cv.html?lang=es|en`: CV en línea (los PDF están en `assets/cv/`).
- `js/data.js`: **todo el contenido editable** (proyectos, galería y datos de contacto).
- `js/i18n.js`: textos fijos de la interfaz en español e inglés.
- `js/cv-data.js`: contenido del CV.
- `css/style.css`: estilos (colores en las variables al inicio del archivo).

## Agregar o cambiar un proyecto
1. Exportar renders a `.webp` (ideal: 1600 px de ancho para portada, 1200 px para detalles) y ponerlos en `assets/img/projects/`.
2. Exportar el modelo 3D a `.glb` (desde Rhino: *Export → glTF Binary*; idealmente menos de 5 MB) y ponerlo en `assets/models/`. Los materiales de metal deben llamarse `metal...` para que funcione el cambio de acabado.
3. Editar la entrada en `window.PROJECTS` de `js/data.js`.

Para la galería, agregar líneas en `window.GALLERY` con `img`, `cat` y `title`.

## Actualizar los PDF del CV
Editar `js/cv-data.js`, abrir `cv.html` en Chrome → Imprimir → Guardar como PDF (A4, sin márgenes, con gráficos de fondo),
y reemplazar los archivos en `assets/cv/`.

## Ver en local
```bash
python3 -m http.server 8080
```
y abrir http://localhost:8080

## Publicar en Netlify
Conectar el repositorio en Netlify (*Add new site → Import from Git*). No necesita comando de build; publica la carpeta raíz (ya configurado en `netlify.toml`).

> Las imágenes y modelos 3D actuales son **de ejemplo**, generados para maquetar. Hay que reemplazarlos por los renders reales.
