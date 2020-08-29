const dev = process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("postcss-preset-env"),
    require("cssnano")(),
  ],
};
