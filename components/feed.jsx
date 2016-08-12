(function() {
  'use strict';
  var ReactStateAnimation = require('react-state-animation');
  var Wrapper = React.createClass({
    getInitialState: function() {
      this._animate = new ReactStateAnimation(this);
      return {
        marginLeft: 190
      };
    },
    componentDidMount: function() {
      this._animate.cubicInOut('marginLeft', 0, 300);
    },
    componentWillUnmount: function() {
      this._animate.cubicInOut('marginLeft', 190, 300);
    },
    render: function() {
      return (
        <div style={{marginLeft: this.state.marginLeft}} className={"full-width feed-item " + this.props.color}>
          <span>{this.props.username}</span>
        </div>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
