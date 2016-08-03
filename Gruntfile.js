'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  // require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            ASCIIOnly: true
        },
        deps: {
            files: {
                'src/js/lodash.min.js': 'node_modules/lodash/index.js'
            }
        }
    },
    copy : {
      main: {
        files: [
          // JQuery
          {expand: true, flatten:true, src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'src/js/'},
          // Backbone
          {expand: true, flatten:true, src: ['node_modules/backbone/backbone-min.js'], dest: 'src/js/'},
          // JointJS
          {expand: true, flatten:true, src: ['node_modules/jointjs/dist/joint.min.js'], dest: 'src/js/'},
          {expand: true, flatten:true, src: ['node_modules/jointjs/dist/joint.shapes.devs.min.js'], dest: 'src/js/'},
          {expand: true, flatten:true, src: ['node_modules/jointjs/dist/joint.min.css'], dest: 'src/css/'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', [
      'newer:uglify:deps',
      'newer:copy'
  ]);

};
