const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "productlist.html"),
        nested: resolve(__dirname, "nested/productlist.html"),
      },
    },
  },
});
