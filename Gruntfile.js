module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}, 
			documentjs: {
				src:['js/document.js'],
				dest: 'build/document.js'
			},
			examplejs: {
				src:['js/example.js'],
				dest: 'build/example.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}, 
			static_mappings: {
				files: [
			        {src: 'build/document.js', dest: 'build/document.min.js'},
			        {src: 'build/example.js', dest: 'build/example.min.js'}
			    ]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
 	// JS distribution task.
  	grunt.registerTask('default', ['concat', 'uglify']);
};