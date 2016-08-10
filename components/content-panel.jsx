(function() {
	'use strict';
	var Wrapper = React.createClass({
		render: function() {
			return (
        <section className="content">
          <span className="input input--yoshiko">
            <input onKeyUp={this.props.handleKeyUp} className="input__field input__field--yoshiko" type="text" id="input-10" placeholder="KU Account"/>
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
