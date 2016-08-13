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
        <div className="full-width full-height">
          {
            this.props.reducer.feeds.map(function(item,i) {
              if(i<index) { return; }
              return (
                <div className="feed-wrapper" style={{marginTop: 10}}>
                  <Feed username={item.student.name} color={item.color}/>
                </div>
              );
            })
          }
        </div>
      );
    }
  });
  module.exports = connect(mapStateToProps)(Wrapper);
}());
