Teknovashop - Patch de imágenes y noticias (ES)
===============================================

Qué incluye
-----------
1. `next.config.js` con `remotePatterns` para permitir imágenes desde dominios de Amazon y SHEIN.
2. API `/api/news` que devuelve noticias tecnológicas en español a partir de RSS (Xataka, Genbeta, etc.).
3. `app/lib/news.js` con `fetchNewsES` (ordenado y limitado).
4. `components/NewsList.js` para pintarlas.
5. `components/ProductCard.js` con fallback de imagen y enlaces afiliados.
6. `public/images/placeholder-product.png` como imagen por defecto.

Instalación
-----------
1) Copia los archivos sobre tu repo (manteniendo la estructura de carpetas).
2) Asegúrate de tener instalado: `npm i rss-parser`.
3) Despliega. Comprueba `/api/news` devuelve items.
4) Si usas imágenes de Amazon/SHEIN, ya estarán permitidas por `remotePatterns`.
   - Si algún dominio concreto no carga, añade su hostname en `next.config.js` y redeploy.

Notas sobre afiliación
----------------------
- Amazon: la política obliga a usar la PA-API para imágenes y precios. Si aún no tienes acceso,
  usa imágenes propias/autorizadas o feeds de fabricantes, y NO muestres precios dinámicos de Amazon
  hasta que tengas acceso.
- SHEIN: en su programa nativo suelen dar "Convertir enlace". Para feed de productos con imagen/precio,
  suelen ofrecerlo a través de redes (Awin/Admitad/Impact).

Crons (opcional)
----------------
En `vercel.json` puedes programar un refresco diario de noticias:
{
  "crons": [ { "path": "/api/news", "schedule": "0 7 * * *" } ]
}
