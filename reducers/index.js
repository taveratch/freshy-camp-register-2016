var types = require('../constants');
(function() {
  'use strict';
  var initialState = {
    username: null,
    color: null
  };
  var Reducer = function(state, action) {
    state = typeof state !== 'undefined' ? state : initialState;
    switch(action.type) {
      case types.INIT:
        return initialState;
      default:
        return state;
    }
  };
  module.exports = Reducer;
}());
