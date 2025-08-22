/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
      { protocol: 'https', hostname: 'images-eu.ssl-images-amazon.com' },
      { protocol: 'https', hostname: 'img.ltwebstatic.com' },
      { protocol: 'https', hostname: 'img.shein.com' },
      { protocol: 'https', hostname: 'ishein.oss-accelerate.aliyuncs.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'i.blogs.es' }, // Xataka images
      { protocol: 'https', hostname: 'cdn.vox-cdn.com' }
    ]
  },
  experimental: {
    serverActions: { allowedOrigins: ['*'] }
  }
}

export default nextConfig
