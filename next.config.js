
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // usamos <img> para evitar dominios externos
  experimental: {  static: 0 } }
};
module.exports = nextConfig;
