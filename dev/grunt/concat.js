module.exports = {

    options: {
      separator: ';',
    },
    dist: {
      src: [
        '<%= sourceJS %>'
      ],
      dest: '<%= destJS %>',
    },
};
