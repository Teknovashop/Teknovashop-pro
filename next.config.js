/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Amazon
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
      { protocol: 'https', hostname: 'images-eu.ssl-images-amazon.com' },
      // SHEIN (varía por región)
      { protocol: 'https', hostname: 'img.ltwebstatic.com' },
      { protocol: 'https', hostname: 'img.shein.com' },
      { protocol: 'https', hostname: 'ishein.oss-accelerate.aliyuncs.com' },
    ],
  },
};
module.exports = nextConfig;
