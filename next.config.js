/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        cors: true,
    },
    images: {
        domains: ["cdn.sanity.io"]
    }
}


module.exports = nextConfig
