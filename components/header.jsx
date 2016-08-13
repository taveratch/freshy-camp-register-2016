(function() {
  'use strict';
  var ReactStateAnimation = require('react-state-animation');
  var Wrapper = React.createClass({
    getInitialState: function() {
      this._animate = new ReactStateAnimation(this);
      return {
        marginTop: -100
      };
    },
    componentDidMount: function() {
      this._animate.cubicInOut('marginTop', this.props.isShow ? 140 : -100, 500);
    },
    componentWillReceiveProps: function(props) {
      this._animate.cubicInOut('marginTop', props.isShow ? 140 : -100, 500);
    },
    render: function() {
      return (
        <div style={{marginTop: this.state.marginTop + "px"}} id="header-panel">
          <span>CPSK Freshy Camp #12</span>
          <div className="divider"></div>
        </div>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
