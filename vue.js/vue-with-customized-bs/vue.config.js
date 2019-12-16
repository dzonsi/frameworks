// globaly register dependencies
module.exports = { css: {
  loaderOptions: {
   sass: {
    prependData: `
     @import "./node_modules/bootstrap/scss/_functions.scss";
     @import "@/styles/_variables.scss";
    `
   }
  }
 }};