/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '3000',
              pathname: '/assets/**',
            },
            {
              protocol: 'https',
              hostname: 'localhost',
              port: '443',
              pathname: '/assets/**',
            },
          ],
    }
}

module.exports = nextConfig
