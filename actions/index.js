(function() {
  'use strict';
  var types = require('../constants');
  var Actions = {
    checkUser: function(username) {
      return {
        type: types.CHECK_USER,
        data: username
      };
    },
    submit: function() {
      return {
        type: types.SUBMIT
      };
    },
    init: function() {
      return {
        type: types.INIT
      };
    },
    random: function() {
      return {
        type: types.RANDOM
      };
    },
    updateStudents: function(students) {
      return {
        type: types.UPDATE_STUDENTS,
        data: students
      };
    }
  };
  module.exports = Actions;
}());
