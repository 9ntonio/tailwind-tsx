/* eslint-disable @typescript-eslint/no-var-requires */
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    // process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
    // process.env.NODE_ENV === "production"
    //   ? cssnano({ preset: "default" })
    //   : null,
    require("autoprefixer"),
    cssnano({ preset: "default" }),
    purgecss({
      content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};
