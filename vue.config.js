// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/mixins.scss";
          @import "@/styles/variables.scss";
        `
      }
    }
  }
}
