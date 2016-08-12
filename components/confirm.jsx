(function() {
  'use strict';
  var Actions = require('../actions');
  var bindActionCreators = Redux.bindActionCreators;
  var mapStateToProps = function(state) {
    return {reducer: state};
  };

  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(Actions, dispatch);
  };

  var Wrapper = React.createClass({
    getInitialState: function() {
      return {
        clicked: false
      };
    },
    onClick: function() {
      var self = this;
      var callback = function(data) {
        var showResetButtonCallback = function() {
          var resetButton = $('#reset-button');
          resetButton.fadeIn();
        };
        self.props.random(data.color, showResetButtonCallback);
      };
      if(!this.state.clicked){
        var randomButton = $('#random-button');
        randomButton.fadeOut();
        var confirmPanel = $('#confirm-panel');
        confirmPanel.addClass('white');
        this.props.submit(this.props.reducer.username,callback);
      }
      this.setState({clicked: true});
    },
    reset: function() {
      this.props.init();
    },
    render: function() {
      return (
        <div id="confirm-panel" className="center">
          <p>{this.props.reducer.username}</p>
          <p>{this.props.reducer.name}</p>
          <button id="reset-button" className="button" style={{display: 'none'}} onClick={this.reset} >Reset</button>
          <button id="random-button" className="button" onClick={this.onClick}>Go</button>
        </div>
      );
    }
  });
  module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
