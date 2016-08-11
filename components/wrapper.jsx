var ReactDOM = require("react-dom");
var Provider = ReactRedux.Provider;
var App = require('./app.jsx');
var reducer = require('../reducers');
var websocketlib = require('../libs/websocket.js');
var createStore = Redux.createStore;
var store = createStore(reducer);
websocketlib(store);
(function() {
  'use strict';

    module.exports = React.createClass({
      render: function() {
        return (
          <Provider store={store}>
            <App />
          </Provider>
        );
      }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
