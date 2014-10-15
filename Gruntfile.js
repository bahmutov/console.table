/* global module */
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
        jshintrc: '.jshintrc'
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
        dest: 'dist/console.table.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/console.table.min.js': ['dist/console.table.js']
        }
      }
    },

    'clean-console': {
      all: {
        options: {
          url: ['index.table', 'index.min.html'],
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
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    },

    watch: {
      options: {
        atBegin: true
      },
      all: {
        files: ['*.js', 'test/*.js'],
        tasks: ['test']
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint', 'mochaTest']);
  grunt.registerTask('browser', ['sync', 'concat', 'uglify', 'usebanner']);
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'test', 'browser']);
};
