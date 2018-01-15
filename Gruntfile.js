'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '../common/assets/js/*.js',
        '../common/assets/js/plugins/*.js',
        '!../common/assets/js/scripts.min.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          '../common/assets/js/scripts.min.js': [
            '../common/assets/js/plugins/*.js',
            '../common/assets/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '../common/images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '../common/images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '../common/images/',
          src: '{,*/}*.svg',
          dest: '../common/images/'
        }]
      }
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        '../common/assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
