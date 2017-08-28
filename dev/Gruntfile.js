module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: {
      staticMappings: {
        htmllint: 'grunt-html'
      }
    },

    data: {
      // Data passed into config.  Can use with <%= test %>
      buildConfigDir : 'grunt/config',

      // Paths for Watch:
        // Grunt
        buildSettings: [
          /* Grunt config         */ 'Gruntfile.js',
          /* Grunt modules        */ 'package.json',
          /* Build settings       */ 'grunt/aliases.yaml',
          /* Grunt tasks          */ 'grunt/*.js',
          /* Grunt tasks configs  */ '<%= buildConfigDir %>',
          /* Browserlist settings */ '.browserslistrc'
        ],

        // Compile:
          // Source:
            // HTML
            sourceHTMLDir   : 'src/pug',
            sourceHTMLFiles : '<%= sourceHTMLDir %>' + '/**/*.pug',
            // CSS
            sourceCSSDir    : 'src/sass',
            sourceCSSFiles  : '<%= sourceCSSDir %>' + '/**/*.scss',
            // JS
            sourceJS        : [
              'src/js/**/*.js'
            ],
            // IMG
            sourceIMGDir              : 'src/img',
                sourceIMGSpritesDir   : '<%= sourceIMGDir %>' + '/sprites',
                sourceIMGFiles        : '<%= sourceIMGDir %>' + '/**/*.{png,jpg,gif}',

          // Destination:
            destHTMLDir     : '../',
              destHTML      : '<%= destHTMLDir %>' + '*.html',
            destCSSDir      : '../assets/css', // generated css-files names taked from scss files in %sourceCSSDir
                destCSSExt  : '.min.css',
                destCSS     : '<%= destCSSDir %>' + '/main' + '<%= destCSSExt %>',
            destJSDir       : '../assets/js',
                destJS      : '<%= destJSDir %>'  + '/main.js',
            destIMGDir      : '../assets/img',
    }
  });
};
