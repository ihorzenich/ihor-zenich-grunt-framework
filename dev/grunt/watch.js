module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    configs: {
        files: [
          '<%= buildSettings %>',
        ],
        tasks: [
          'prod'
        ]
    },

    html: {
      files: [
        '<%= sourceHTMLFiles %>'
      ],
      tasks: [
        'html',
      ]
    },

    styles: {
        files: [
            '<%= sourceCSSFiles %>',
        ],
        tasks: [
            'css',
        ]
    },

    scripts: {
      files: [
        '<%= sourceJS %>'
      ],
      tasks: [
        'js'
      ]
    },

    images: {
        files: [
            '<%= sourceIMGFiles %>',
        ],
        tasks: [
            'img'
        ]
    },
};
