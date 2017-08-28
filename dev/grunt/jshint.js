module.exports = {

    options: {
        reporter: require('jshint-stylish'),
        jshintrc: '<%= buildConfigDir %>' + '/.jshintrc',
    },

    files: [
        '<%= sourceJS %>'
    ]
};
