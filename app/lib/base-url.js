import { headers } from 'next/headers';

// Devuelve https://tu-dominio.com siempre, tanto en Vercel como en local
export function getBaseUrl() {
  // 1) Preferimos variable de entorno pública si existe
  const env = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (env) {
    // VERCEL_URL viene sin protocolo; NEXT_PUBLIC_SITE_URL normalmente con https
    return env.startsWith('http') ? env : `https://${env}`;
  }

  // 2) Fallback: construir desde cabeceras (útil en SSR)
  const h = headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('host') ?? 'localhost:3000';
  return `${proto}://${host}`;
}
