var FilterItem = require('./filtered_item.jsx');
var key = 1;
(function() {
  'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var Wrapper = React.createClass({
    render: function() {
      var self = this;
      if(this.props.word === ''){ return <div></div>; }
      var filtered = _.filter(this.props.reducer.students,function(item) {
        return item.std_id.indexOf(self.props.word) > -1;
      });
      return (
        <div id="filter">
          {
            filtered.map(function(item, i) {
              return <FilterItem key={key++} username={item.std_id} name={item.name}/>;
            })
          }
        </div>
      );
    }
  });
  module.exports = connect(mapStateToProps)(Wrapper);
}());
