var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
(function() {
  'use strict';
  var Wrapper = React.createClass({
    getInitialState: function() {
      return {
        colors: ['#EC644B', '#F5AB35', '#F89406', '#3FC380', '#59ABE3', '#A38F84']
      };
    },
    render: function() {
      return (
        <Row className="full-height">
          {
            this.state.colors.map(function(item,i) {
              return (
                <Col key={i} sm={2} md={2} lg={2} className="full-height" style={{backgroundColor: item}}></Col>
              );
            })
          }
        </Row>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
