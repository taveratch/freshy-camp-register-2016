(function() {
  'use strict';
  var ReactStateAnimation = require('react-state-animation');
  var Wrapper = React.createClass({
    getInitialState: function() {
      this._animate = new ReactStateAnimation(this);
      return {
        marginTop: -150,
        opacity: 0
      };
    },
    componentWillMount: function() {
      this._animate.cubicInOut('marginTop', 0, 1000);
      this._animate.cubicInOut('opacity', 1, 1000);
    },
    render: function() {
      return (
        <div style={{marginTop: this.state.marginTop + "%", opacity: this.state.opacity}} className={"full-width feed-item " + this.props.color + "-feed"}>
          <span>{this.props.username}</span>
        </div>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
