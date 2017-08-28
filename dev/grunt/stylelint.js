module.exports = {
    options: {
      configFile: '<%= buildConfigDir %>' + '/.stylelintrc',
    },
    src: [
      '<%= sourceCSSFiles %>'
    ]
};
