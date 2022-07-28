/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: 'https://jinwangdev.com/images/medium/',
    domains: ['res.cloudinary.com', 'jinwangdev.com'],
  },
};

module.exports = nextConfig;
