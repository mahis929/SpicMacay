
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 500,
            quality: 80
          }, {
            width: 800,
            quality: 80
          }, {
            width: 1600,
            quality: 100   //*************THis is it****************
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'public/images_src/',
          dest: 'public/images/'
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['public/images'],
      },
    },
/* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['public/images']
        },
      },
    },
/* Copy the "fixed" images that don't go through processing into the 
images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'public/images_src/fixed/*.{gif,jpg,png}',
          dest: 'public/images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
