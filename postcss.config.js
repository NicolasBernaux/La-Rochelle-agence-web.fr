const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = (ctx) => {
  return {
    plugins: [
      require('autoprefixer'),
      ...(ctx.options.env === 'production'
        ? [
            purgecss({
              content: ['./**/*.html', './**/*.ejs'],
              keyframes: true,
              defaultExtractor: (content) => content.match(/[A-z0-9-:/]+/g)
            })
          ]
        : [])
    ]
  };
};
