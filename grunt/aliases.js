"use strict";

module.exports = {

    // Register Build Tasks
    'js'       :['browserify', 'uglify']
  , 'css'      :['less', 'cssmin']

    // Register Dev Tasks
  , 'base'     :['jshint', 'js', 'css']
  , 'default'  :['base', 'watch']

};
