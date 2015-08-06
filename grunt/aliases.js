"use strict";

module.exports = {

    // Register Build Tasks
    'js'       :['browserify', 'uglify']
  , 'css'      :['less', 'cssmin']

    // Register Dev Tasks
  , 'build'     :['jshint', 'js', 'css']
  , 'default'  :['build', 'watch']

};
