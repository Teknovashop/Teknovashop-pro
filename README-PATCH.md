# Parche Teknovashop – noticias ES + imágenes remotas

## Qué incluye
- Soporte de imágenes remotas (Amazon/SHEIN/medios) en `next.config.js`
- Noticias tecnológicas en español (`/api/news`) desde Xataka, Genbeta, Hipertextual, Google News (IA/tecnología)
- Componentes `NewsList` y `ProductCard` (con imagen placeholder y efecto hover)
- `vercel.json` con cron diario para refrescar noticias

## Pasos
1. Copia todo el contenido de este ZIP sobre tu repo (respetando rutas).
2. `npm i rss-parser`
3. Asegúrate de tener `NEXT_PUBLIC_SITE_URL` en Vercel (ej. `https://teknovashop-pro.vercel.app`).
4. Usa `NewsList` en tu `app/page.js` tal como tienes y llama a `${NEXT_PUBLIC_SITE_URL}/api/news` con `cache: 'no-store'`.

## Vídeo de héroe (opcional)
- Añade `NEXT_PUBLIC_PEXELS_VIDEO=https://.../video.mp4` si quieres un fondo de vídeo ligero.
  (o sube uno a `public/videos/hero.mp4` y ajusta el componente)

## Amazon y SHEIN
- Amazon PA-API es necesaria para precios e imágenes oficiales. Hasta que la tengas, usa *deep links* y evita mostrar precios dinámicos de Amazon.
- SHEIN: solicita **product feed** vía red (Awin/Admitad/Impact). Cuando tengas la URL, ingéstala en un endpoint propio y pinta los datos.
