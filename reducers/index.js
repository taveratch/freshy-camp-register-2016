var types = require('../constants');
(function() {
  'use strict';
  var initialState = {
    username: null,
    name: null,
    color: null,
    students: [],
    feeds: []
  };
  var className = ['red', 'orange', 'yellow', 'green', 'blue', 'brown'];
  function changeColor(count, round, color, callback) {
    if(count === className.length) {
      --round;
      if(round === 0) { return; }
      changeColor(0,round,color, callback);
      return;
    }
    setTimeout(function() {
      var ContentPanel = $('#content-panel');
      className.map(function(color) {
        ContentPanel.removeClass(color);
      });
      ContentPanel.addClass(className[count]);
      if(round === 1 && className[count] === color){
        if(typeof callback === 'function'){ callback(); }
        return;
       }
      changeColor(++count, round, color, callback);
    },400);
  }

  function resetColor() {
    var ContentPanel = $('#content-panel');
    className.map(function(item) {
      ContentPanel.removeClass(item);
    });
  }

  var Reducer = function(state, action) {
    state = typeof state !== 'undefined' ? state : initialState;
    var newState = _.merge({},state);
    switch(action.type) {
      case types.INIT:
        resetColor();
        return _.merge({},initialState, {students: state.students, feeds: state.feeds});
      case types.RANDOM:
        changeColor(0,3,action.color, action.callback);
        return state;
      case types.UPDATE_STUDENTS:
        newState.students = action.data;
        return newState;
      case types.CHECK_USER:
        return _.merge(newState, {
          username: action.username,
          name: action.name
        });
      case types.UPDATE_FEED:
        newState.feeds.push(action.data);
        return newState;
      default:
        return state;
    }
  };
  module.exports = Reducer;
}());
