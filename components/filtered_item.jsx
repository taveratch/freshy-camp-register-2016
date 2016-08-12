(function() {
	'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var Actions = require('../actions');
  var Services = require('../libs/services');
  var mapStateToProps = function(state) {
    return { reducer: state };
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(Actions, dispatch);
  };
  var Wrapper = React.createClass({
    onClick: function() {
      var self = this;
      var callback = function(data) {
        if(data.available){
          self.props.checkUser(data);
        }
      };
      Services.check(this.props.username, callback);
    },
		render: function() {
			return (
				<div onClick={this.onClick} className="filter-item-wrapper">
					<div className="filter-item">
						<span>{this.props.username}</span>
						<span className="filter-item-name">{this.props.name}</span>
					</div>
				</div>
			);
		}
	});
	module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
