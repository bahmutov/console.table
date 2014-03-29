/* global module, require */
module.exports = function (grunt) {
  module.require('time-grunt')(grunt);

  grunt.initConfig({
    'nice-package': {
      all: {
        options: {
          blankLine: true
        }
      }
    },

    jshint: {
      'options': {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      default: {
        'src': [ '*.js', 'test/*.js' ]
      }
    },

    sync: {
      all: {
        options: {
          sync: ['author', 'name', 'version', 'private', 'license', 'keywords'],
        }
      }
    },

    concat: {
      dist: {
        src: ['node_modules/js-beautify/js/lib/beautify-html.js', 'index.js'],
        dest: 'dist/console.html.js'
      }
    },

    copy: {
      dist: {
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },

    'clean-console': {
      all: {
        options: {
          url: 'dist/index.html',
          timeout: 1
        }
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('browser', ['sync', 'concat', 'copy']);
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'jshint',
    'browser', 'clean-console']);
};
