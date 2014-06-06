module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}, 
			documentjs: {
				src:['js/document.js'],
				dest: 'js/document.js'
			},
			examplejs: {
				src:['js/example.js'],
				dest: 'js/example.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}, 
			static_mappings: {
				files: [
			        {src: 'js/document.js', dest: 'js/document.min.js'},
			        {src: 'js/example.js', dest: 'js/example.min.js'}
			    ]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
 	// JS distribution task.
  	grunt.registerTask('default', ['concat', 'uglify']);
};