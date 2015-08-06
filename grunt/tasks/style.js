"use strict";

module.exports = {

    // Compile LESS into CSS
    less: {
      options: {
          sourceMap: true
        , outputSourceFiles: true
      },
      all: {
        files: {
            '<%= build.css %>/main.css'  : '<%= files.less %>'
        }
      }
    },

    // Concat & Minify CSS
    cssmin: {
      app: {
        files: {
            '<%= build.css %>/main.min.css'    : ['<%= build.css %>/main.css']
        }
      }
    }

};
