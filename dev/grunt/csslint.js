module.exports = {

    options: {
        csslintrc: '<%= buildConfigDir %>' + '/.csslintrc',
    },

    src: [
        '<%= destCSS %>'
    ]
};
