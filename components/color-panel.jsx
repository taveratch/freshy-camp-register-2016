var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var PlusOne = require('./plus_one.jsx');
(function() {
	'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
	var Wrapper = React.createClass({
		getInitialState: function() {
			return {
				colors: [
					'#EC644B',
					'#E67E22',
					'#F9BF3B',
					'#3FC380',
					'#59ABE3',
					'#795548'
				]
			};
		},
		render: function() {
			return (
				<Row className="full-height">
					<Col xs={2} sm={2} md={2} lg={2} className="full-height flex-center-x">
						{this.props.reducer.red.count !== 0 ? <PlusOne key={this.props.reducer.red.count} name={this.props.reducer.red.name} /> : null}
					</Col>
          <Col xs={2} sm={2} md={2} lg={2} className="full-height flex-center-x">
						{this.props.reducer.orange.count !== 0 ? <PlusOne key={this.props.reducer.orange.count} name={this.props.reducer.orange.name}/> : null}
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} className="full-height flex-center-x">
						{this.props.reducer.yellow.count !== 0 ? <PlusOne key={this.props.reducer.yellow.count} name={this.props.reducer.yellow.name}/> : null}
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} className="full-height flex-center-x">
						{this.props.reducer.green.count !== 0 ? <PlusOne key={this.props.reducer.green.count} name={this.props.reducer.green.name}/> : null}
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} className="full-height flex-center-x">
						{this.props.reducer.blue.count !== 0 ? <PlusOne key={this.props.reducer.blue.count} name={this.props.reducer.blue.name}/> : null}
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} className="full-height flex-center-x">
						{this.props.reducer.brown.count !== 0 ? <PlusOne key={this.props.reducer.brown.count} name={this.props.reducer.brown.name}/> : null}
          </Col>
				</Row>
			);
		}
	});
	module.exports = connect(mapStateToProps)(Wrapper);
}());
