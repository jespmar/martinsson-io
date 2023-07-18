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
              hostname: 'martinsson-io.vercel.app',
              pathname: '/assets/**',
            },
          ],
    }
}

module.exports = nextConfig
