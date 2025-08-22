
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // usamos <img> para evitar dominios externos
  experimental: { staleTimes: { dynamic: 0, static: 0 } }
};
module.exports = nextConfig;
