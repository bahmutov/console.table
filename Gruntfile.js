/* global module, require */
module.exports = function (grunt) {
  module.require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

    uglify: {
      dist: {
        files: {
          'dist/console.html.min.js': ['dist/console.html.js']
        }
      }
    },

    'clean-console': {
      all: {
        options: {
          url: ['index.html', 'index.min.html'],
          timeout: 1
        }
      }
    },

    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '/*! <%= pkg.name %>@<%= pkg.version %> - <%= pkg.description %> ' +
            '<%= grunt.template.today("dd-mm-yyyy") %> */',
        },
        files: {
          src: ['dist/console.html.js', 'dist/console.html.min.js']
        }
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('browser', ['sync', 'concat']);
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'jshint',
    'browser', 'uglify', 'usebanner', 'clean-console']);
};
