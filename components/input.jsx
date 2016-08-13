(function() {
	'use strict';
  var ReactStateAnimation = require('react-state-animation');
	var Wrapper = React.createClass({
    getInitialState: function() {
      this._animate = new ReactStateAnimation(this);
      return {
        opacity: 0
      };
    },
    componentDidMount: function() {
      this._animate.linearIn('opacity', 1, 200);
    },
		render: function() {
			return (
        <section className="content" style={{opacity: this.state.opacity}}>
          <span className="flex-center-x input input--yoshiko">
            <input ref="username" onKeyUp={this.props.handleKeyUp} className="input__field input__field--yoshiko" type="text" id="input-10" placeholder="KU Account"/>
            <label className="input__label input__label--yoshiko" htmlFor="input-10">
              <span className="input__label-content input__label-content--yoshiko" data-content="KU Account">&nbsp;</span>
            </label>
          </span>
        </section>
			);
		}
	});
	module.exports = connect()(Wrapper);
}());
