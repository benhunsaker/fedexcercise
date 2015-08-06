"use strict";

module.exports = {

    // Register Build Tasks
    'js'       :['concat:js', 'uglify']
  , 'css'      :['less', 'cssmin']
  //, 'build'    :['handlebars', 'css', 'js']

    // Register Dev Tasks
  //, 'base'     :['jshint', 'handlebars', 'less']
  , 'base'     :['jshint', 'concat:js', 'less', 'cssmin']
  , 'default'  :['base', 'watch']

};
