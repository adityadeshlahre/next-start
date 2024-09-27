/** @type {import('next').NextConfig} */
const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@repo/ui",
    "validation-schemas",
    "@repo/database",
    "@repo/types",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};
