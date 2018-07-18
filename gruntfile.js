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
	        	dest: 'builds/development/css/style.css',
	        	
	      	}]
	      }
	    }, //sass
	    
	    watch: {
	    	options: {
	    		spawn: false
	    	},
	    	scripts: {
	    		files: ['builds/development/**/*.html',
	    					'components/scrips/**/*.js',
	    					'components/sass/**/*.scss'],
	    		tasks: ['concat', 'sass']
	    	}
	    }


  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'sass', 'watch']);

}; //grunt wrapper function