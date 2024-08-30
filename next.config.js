const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            htmlrewriter: path.resolve(
                __dirname,
                'node_modules/.pnpm/htmlrewriter@0.0.9/node_modules/htmlrewriter/vercel.js'
            )
        };
        // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
        config.experiments = { ...config.experiments, asyncWebAssembly: true };
        return config;
    }
};

module.exports = nextConfig;
