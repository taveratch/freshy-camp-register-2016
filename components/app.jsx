var ColorPanel = require('./color-panel.jsx');
var ContentPanel = require('./content-panel.jsx');
var Services = require('../libs/services');
var bindActionCreators = Redux.bindActionCreators;
var Actions = require('../actions');
var Input = require('./input.jsx');
(function() {
	'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(Actions, dispatch);
  };
	var Wrapper = React.createClass({
    checkUserCallback: function(data) {
      if(data.available) {
        this.props.checkUser(data.username);
      }
      console.log(data);
    },
		handleKeyUp: function(event) {
			if (event.keyCode === 13) {
        Services.check(event.target.value, this.checkUserCallback);
			}
		},
		render: function() {
			return (
				<div className="full-width full-height">
					<div id="color-panel">
						<ColorPanel/>
					</div>
					<div id="content-panel">
						<div style={{
							width: "60%"
						}}>
							<Input handleKeyUp={this.handleKeyUp}/>
						</div>
					</div>
				</div>
			);
		}
	});
	module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
