(function() {
	'use strict';
  var Action = require('../actions');
	var ActionCable = require('actioncable');
	var cable = ActionCable.createConsumer('ws://158.108.237.178:3000/live');
  var Services = require('./services');
  var WebSocket = function(store) {
    cable.subscriptions.create('StudentsChannel', {
  		received: function(data) {
        var callback = function(data) {
          store.dispatch(Action.updateStudents(data));
        };
        store.dispatch(Action.random());
        Services.getStudents(callback);
  			return true;
  		}
  	});
  };
  module.exports = WebSocket;
}());
