/** @type {(import'next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co", "images.unsplash.com", "t.scdn.co"],
    formats: ["image/webp"],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
