(function() {
  'use strict';
  var ReactStateAnimation = require('react-state-animation');
  var Wrapper = React.createClass({
    getInitialState: function() {
      this._animate = new ReactStateAnimation(this);
      return {
        opacity: 1,
        marginBottom: 0
      };
    },
    componentDidMount: function() {
      this._animate.cubicInOut('opacity', 0, 2300);
      this._animate.cubicInOut('marginBottom', 150, 2300);
    },
    render: function() {
      return (
        <span className="plus-one-span" style={{opacity: this.state.opacity, marginBottom: this.state.marginBottom + "%"}}>{this.props.name}</span>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
