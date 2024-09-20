/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@repo/ui",
    "validation-schemas",
    "@repo/database",
    "@repo/types",
  ],
};
