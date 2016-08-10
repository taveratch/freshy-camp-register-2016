(function() {
  'use strict';
  var types = require('../constants');
  var Actions = {
    checkUser: function(username) {
      return {
        type: types.CHECK_USER
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
    }
  };
  module.exports = Actions;
}());
