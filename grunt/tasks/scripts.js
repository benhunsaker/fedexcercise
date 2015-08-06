"use strict";

module.exports = {

    browserify: {
      js: {
          src: ['<%= public_root%>js/app/main.js']
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
