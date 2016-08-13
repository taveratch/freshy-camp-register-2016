(function() {
	'use strict';
  var Action = require('../actions');
	var ActionCable = require('actioncable');
	var cable = ActionCable.createConsumer('ws://158.108.231.52:3000/live');
  var Services = require('./services');
  var WebSocket = function(store) {
    cable.subscriptions.create('StudentsChannel', {
  		received: function(data) {
        setTimeout(function() {
          store.dispatch(Action.updateFeed(data)); //update feed in real time
        },5400);
        var callback = function(data) {
          store.dispatch(Action.updateStudents(data));
        };
        Services.getStudents(callback);
  			return true;
  		}
  	});
  };
  module.exports = WebSocket;
}());
