(function() {
  'use strict';
  var Actions = require('../actions');
  var bindActionCreators = Redux.bindActionCreators;
  var ReactStateAnimation = require('react-state-animation');
  var mapStateToProps = function(state) {
    return {reducer: state};
  };

  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(Actions, dispatch);
  };

  var Wrapper = React.createClass({
    getInitialState: function() {
      this._animate = new ReactStateAnimation(this);
      return {
        clicked: false,
        opacity: 0
      };
    },
    componentDidMount: function() {
      this._animate.linearIn('opacity', 1, 200);
    },
    componentWillUnmount: function() {
      this._animate.linearIn('opacity', 0, 200);
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
        var randomButton = $('#confirm-button-wrapper');
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
        <div style={{opacity: this.state.opacity}} id="confirm-panel" className="center">
          <p>{this.props.reducer.username}</p>
          <p>{this.props.reducer.name}</p>
          <br></br>
          <button id="reset-button" className="button" style={{display: 'none'}} onClick={this.reset} >Ok</button>
          <div id="confirm-button-wrapper">
            <button id="back-button" className="button" onClick={this.reset}>Back</button>
            <span>&nbsp;&nbsp;</span>
            <button id="random-button" className="button" onClick={this.onClick}>Go</button>
          </div>
        </div>
      );
    }
  });
  module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
