var types = require('../constants');
(function() {
  'use strict';
  var initialState = {
    username: null,
    color: null,
    students: []
  };
  function changeColor(count, round) {
    var className = ['red', 'orange', 'orange2', 'green', 'blue', 'brown'];
    if(count === className.length) {
      --round;
      if(round === 0) { return; }
      changeColor(0,round);
      return;
    }
    setTimeout(function() {
      var ContentPanel = $('#content-panel');
      className.map(function(color) {
        ContentPanel.removeClass(color);
      });
      ContentPanel.addClass(className[count]);
      changeColor(++count, round);
    },400);
  }
  var Reducer = function(state, action) {
    state = typeof state !== 'undefined' ? state : initialState;
    var newState = _.merge({},state);
    switch(action.type) {
      case types.INIT:
        return initialState;
      case types.RANDOM:
        changeColor(0,2);
        return state;
      case types.UPDATE_STUDENTS:
        return _.merge(newState, {
          students: action.data
        });
      case types.CHECK_USER:
        return _.merge(newState, {
          username: action.data
        });
      default:
        return state;
    }
  };
  module.exports = Reducer;
}());
