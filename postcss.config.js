module.exports = {
  plugins: {
    autoprefixer: { grid: true },
    'postcss-import': {},
    'postcss-cssnext': {
      warnForDuplicates: false,
      map: true,
      remove: false,
      browsers: ['> 1%', 'IE 11'],
      extensions: {},
    },
    'postcss-inherit': {},
    'postcss-assets': {},
    'postcss-nested': {},
    cssnano: {
      reduceIdents: false,
      zindex: false,
    },
    'postcss-hexrgba': {},
    'postcss-reporter': {
      clearMessages: true,
    },
    tailwindcss: './tailwind.config.js',
  },
  sourceMap: true || 'inline',
};
