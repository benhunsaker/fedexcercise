
"use strict";

module.exports = {

    pkg: '<json:package.json>',
    public_root: "",
    folders: {
      libs    : ['js/libs'],
      build   : ['build']
    },
    build: {
      css     : ['<%= folders.build %>/css'],
      hbs     : ['<%= folders.build %>/handlebars'],
      js      : ['<%= folders.build %>/js']
    },
    files: {
      grunt   : ['gruntfile.js', 'grunt-tasks/*.js'],
      hbs     : ['handlebars/**/*.hbs'],
      less    : ['<%= public_root %>less/*.less'],
      js      : ['<%= public_root %>js/**/*.js'],
      helpers : ['<%= public_root %>js/handlebars/*.js']
    }

};
