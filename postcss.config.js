module.exports = {
  plugins: {
    autoprefixer: { grid: true },
    "postcss-import": {},
    "postcss-cssnext": {
      warnForDuplicates: false,
      map: true,
      remove: false,
      browsers: ["> 1%", "IE 11"],
      extensions: {
        "--phone": "(min-width: 544px)",
        "--tablet": "(min-width: 768px)",
        "--desktop": "(min-width: 992px)",
        "--large-desktop": "(min-width: 1200px)"
      }
    },
    "postcss-inherit": {},
    "postcss-assets": {},
    "postcss-nested": {},
    cssnano: {
      reduceIdents: false,
      zindex: false
    },
    "postcss-hexrgba": {},
    "postcss-reporter": {
      clearMessages: true
    }
  },
  sourceMap: true || "inline"
};
