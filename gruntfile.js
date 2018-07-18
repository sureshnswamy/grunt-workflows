module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      }
    },//concat
    sass: {
	      dist: {
          options: {
          	style: 'expanded',
          	sourcemap: 'none',
          	noCache: true
          },
	        files: [{
	        	src: 'components/sass/style.scss',
	        	dest: 'builds/development/css/styles.css',
	        	
	      	}]
	      }
	    } //sass


  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('default', ['concat', 'sass']);

}; //grunt wrapper function