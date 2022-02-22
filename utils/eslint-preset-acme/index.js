module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: ["./docs/*/", "./packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
