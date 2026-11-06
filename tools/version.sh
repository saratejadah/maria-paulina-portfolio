#!/usr/bin/env bash
# Pone una marca de versión nueva (?v=FECHA) a los archivos CSS y JS en las páginas HTML,
# para que el navegador descargue siempre la versión más reciente después de cada cambio.
# Uso: bash tools/version.sh   (ejecutar antes de subir cambios)
set -euo pipefail
cd "$(dirname "$0")/.."
v=$(date -u +%Y%m%d%H%M%S)
for f in index.html project.html cv.html; do
  sed -i -E "s#((href|src)=\"(css|js)/(style\.css|i18n\.js|data\.js|app\.js|cv-data\.js))(\?v=[0-9]+)?\"#\1?v=$v\"#g" "$f"
done
echo "versión $v"
