/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // added this to export as static
  output: "export",
};

module.exports = nextConfig;

module.exports = {
  images: {
    unoptimized: true,
  },
};
