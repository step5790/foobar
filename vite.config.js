const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "productlist.html"),
        sub: resolve(__dirname, "nested/productlist.html"),
      },
    },
  },
};
