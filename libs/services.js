(function() {
  'use strict';
  var Constants = require('./constants');
  var Service = {
    check: function(username, callback) {
      $.ajax({
        type: 'POST',
        url: Constants.url + '/students/check',
        data: {username: username}
      })
      .done(function(data) {
        if(typeof callback === 'function') {
          callback(data);
        }
      });
    },
    submit: function(username, callback) {
      $.ajax({
        type: 'POST',
        url: Constants.url + '/student/assign',
        data: {username: username}
      })
      .done(function(data) {
        if(typeof callback === 'function') {
          callback(data);
        }
      });
    },
    getStudents: function(callback) {
      $.ajax({
        url: Constants.url + '/students'
      })
      .done(function(data) {
        if(typeof callback === 'function') {
          callback(data);
        }
      });
    }
  };
  module.exports = Service;
}());
