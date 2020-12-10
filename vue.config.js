module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/normalize.scss";
        @import "@/assets/global-style.scss";
        `
      }
    }
  }
};
