(function() {
  'use strict';
  var Feed = require('./feed.jsx');
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var Wrapper = React.createClass({
    render: function() {
      var index = this.props.reducer.feeds.length-5;
      if(index < 0) { index = 0; }
      return (
        <div className="full-width">
          {
            this.props.reducer.feeds.map(function(item,i) {
              if(i<index) { return; }
              return <Feed username={item.student.name} color={item.color}/>;
            })
          }
        </div>
      );
    }
  });
  module.exports = connect(mapStateToProps)(Wrapper);
}());
