module.exports = {
  extends: ["./../config-eslint/next.json"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
