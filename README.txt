# Vercel config fix
Esta `vercel.json` corrige el error:
> `crons[0].schedule] should NOT be shorter than 9 characters`

- Programación: `0 7 * * *` (una vez al día a las 07:00 UTC).
- Path del cron: `/api/news`.
- Incluye variables de entorno `NEXT_PUBLIC_SITE_URL` y `NEWS_FEEDS_ES`.
