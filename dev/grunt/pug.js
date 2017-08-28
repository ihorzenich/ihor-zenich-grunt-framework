module.exports = {
    compile: {
      options: {
        pretty: true
      },
      files: [{
        expand: true,
        cwd: '<%= sourceHTMLDir %>',
        src: ['*.pug'],
        dest: '<%= destHTMLDir %>',
        ext: '.html'
      }]
    }
};
