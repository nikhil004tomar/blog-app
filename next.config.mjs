/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        domains: ["plus.unsplash.com", "avatars.githubusercontent.com" ],
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
    },
};

export default nextConfig;
