var ColorPanel = require('./color-panel.jsx');
var ContentPanel = require('./content-panel.jsx');
(function() {
	'use strict';
	var Wrapper = React.createClass({
    changeColor: function(count,round) {
      var className = ['red', 'orange', 'orange2', 'green', 'blue', 'brown'];
      if(count === className.length) {
        --round;
        if(round === 0) { return; }
        this.changeColor(0,round);
        return;
      }
      var self = this;
      setTimeout(function() {
        var ContentPanel = $('#content-panel');
        className.map(function(color) {
          ContentPanel.removeClass(color);
        });
        ContentPanel.addClass(className[count]);
        self.changeColor(++count, round);
      },400);
    },
    handleKeyUp: function(event) {
      if(event.keyCode === 13) {
        this.changeColor(0,2);
      }
    },
    render: function() {
      return (
        <div className="full-width full-height">
          <div id="color-panel">
            <ColorPanel />
          </div>
          <div id="content-panel">
            <div style={{width: "60%"}}>
              <ContentPanel handleKeyUp={this.handleKeyUp} />
            </div>
          </div>
        </div>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
