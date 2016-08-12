var Input = require('./input.jsx');
var Filter = require('./filter.jsx');
var Services = require('../libs/services');
var bindActionCreators = Redux.bindActionCreators;
(function() {
  'use strict';
  var mapStateToProps = function(state) {
    return { reducer: state };
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(Actions, dispatch);
  };
  var Wrapper = React.createClass({
    getInitialState: function() {
      return {
        filter: ''
      };
    },
    checkUserCallback: function(data) {
      if(data.available) {
        this.props.checkUser(data);
      }
    },
		handleKeyUp: function(event) {
      this.setState({ filter: event.target.value });
			if (event.keyCode === 13) {
        Services.check(event.target.value, this.checkUserCallback);
			}
		},
    render: function() {
      return (
        <div style={{position: 'relative'}}>
          <Input handleKeyUp={this.handleKeyUp}/>
          <div id="filter-wrapper" className="full-width" style={{position: 'absolute', top: 0, marginTop: "90px", textAlign: 'left'}}>
            <Filter word={this.state.filter} />
          </div>
        </div>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
