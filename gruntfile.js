module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '360px',
            quality: 40
          },{
            name: 'medium',
            width: '720px',
            quality: 51
          },{
            name: 'large',
            width: '1080px',
            quality: 50
          },{
            name: 'xlarge',
            width: '1170px',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};