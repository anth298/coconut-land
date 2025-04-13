/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['placehold.co', 'media.mia.vn'],
    },
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    productionBrowserSourceMaps: false,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
                {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: dev,
                        mozjpeg: {
                            progressive: true,
                            quality: 65,
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75,
                        },
                    },
                },
            ],
        });

        return config;
    },
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
    poweredByHeader: false,
    generateEtags: false,
}

module.exports = nextConfig 