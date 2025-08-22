
# Teknovashop Pro (Ready-to-deploy)

Tienda tech + noticias (Next.js 14).  
- Carrusel *Top ventas* (react-slick)  
- Sidebar *Ofertas rápidas*  
- Noticias en español (RSS)  
- Landing de categorías y rutas dinámicas `/categories/[slug]`  
- Newsletter básico (API simulada)  
- `vercel.json` con CRON diario 06:00 UTC para refrescar noticias.  

## Despliegue rápido
1. Sube todo este repo a GitHub.
2. En Vercel, importa el proyecto. **Root Directory:** `./`
3. Variables (ya incluidas): `NEXT_PUBLIC_SITE_URL`, `NEWS_FEEDS_ES`.  
4. Deploy.

> Edita `data/products.json` para cambiar productos. Coloca imágenes en `/public/images` y referencia su ruta en el JSON.
