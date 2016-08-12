(function() {
  'use strict';
  var types = require('../constants');
  var Services = require('../libs/services');
  var Actions = {
    checkUser: function(data) {
      return {
        type: types.CHECK_USER,
        username: data.student ? data.student.std_id : null,
        name: data.student ? data.student.name : null
      };
    },
    submit: function(username, callback) {
      Services.submit(username, callback);
      return {
        type: types.SUBMIT
      };
    },
    init: function() {
      return {
        type: types.INIT
      };
    },
    random: function(color, callback) {
      return {
        type: types.RANDOM,
        color: color,
        callback: callback
      };
    },
    updateStudents: function(students) {
      return {
        type: types.UPDATE_STUDENTS,
        data: students
      };
    },
    updateFeed: function(data) {
      return {
        type: types.UPDATE_FEED,
        data: data
      };
    }
  };
  module.exports = Actions;
}());
