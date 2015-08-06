"use strict";

module.exports = {

    // Concat All CrUX JS
    concat: {
      js: {
          src: ['bower_components/jquery/dist/jquery.min.js','<%= folders.libs %>/**/*.js', '<%= files.js %>']
        , dest: '<%= build.js %>/main.js'
      }
    },

    // Minify All JS Files
    uglify: {
      options: {
          compress  : false
        , mangle    : false
        , sourceMap : true
        , report    : 'min'
      },
      libs: {
        files: {
          '<%= build.js %>/main.min.js' : ['<%= build.js %>/main.js']
        }
      }
    }

};
