module.exports = {
    options: {
      processors: [
        // cssnext
        require("postcss-url")(),    // rebases or inlines url()s.
        require("postcss-cssnext")(),
        // add your "plugins" here…
        require('pixrem')(),         // add fallbacks for rem units
        // Disable autoprefixer, because it's already included in cssnext
        require("cssnano")({autoprefixer: false}), // minify the result
        require("postcss-reporter")()
      ]
    },
    dist: {
      src: '<%= destCSSDir %>' + '/*.css'
    }
};
