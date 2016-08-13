var ColorPanel = require('./color-panel.jsx');
var ContentPanel = require('./content-panel.jsx');
var Services = require('../libs/services');
var bindActionCreators = Redux.bindActionCreators;
var Actions = require('../actions');
var InputWrapper = require('./input-wrapper.jsx');
var FeedWrapper = require('./feed-wrapper.jsx');
var ConfirmPanel = require('./confirm.jsx');
(function() {
	'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(Actions, dispatch);
  };
	var Wrapper = React.createClass({
    componentDidMount: function() {
      var self = this;
      var callback = function(data) {
        self.props.updateStudents(data);
      };
      Services.getStudents(callback);
    },

		render: function() {
      var view;
      if(this.props.reducer.username) {
        view = <ConfirmPanel />;
      }else {
        view = <InputWrapper />;
      }
			return (
				<div className="full-width full-height">

					<div id="content-panel">
            <div id="color-panel">
              <ColorPanel />
            </div>
            <div id="header-panel">
              <span>CPSK Freshy Camp #12</span>
              <div className="divider"></div>
            </div>
            <div id="feed-panel" className="full-height">
              <FeedWrapper />
            </div>
						<div style={{
							width: "50%"
						}}>
            { view }
						</div>
					</div>
				</div>
			);
		}
	});
	module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
