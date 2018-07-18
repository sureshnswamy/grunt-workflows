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
	    
	    connect: {
	    	server: {
	    		options: {
	    			hostname: 'localhost',
	    			port: '4000',
	    			base: 'builds/development/',
	    			livereload: true
	    		}
	    	}
	    }, //connect

	    watch: {
	    	options: {
	    		spawn: false,
	    		livereload: true
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
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['concat', 'sass', 'connect', 'watch']);

}; //grunt wrapper function