var gruntTasks = require('grunt-tasks');

module.exports = function(grunt) {
  gruntTasks(grunt, {
      tasks: 'grunt/tasks/*.js'
    , config: 'grunt/config.js'
    , aliases: 'grunt/aliases.js'
  });
};
