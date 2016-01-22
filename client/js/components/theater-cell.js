var React = require('react');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

// Flux Components
var TheaterActions = require('../actions/theater-actions');
var TheaterStore = require('../stores/theater-store');

// React Bootstrap Components
var Col = require('react-bootstrap').Col;
var Image = require('react-bootstrap').Image;
var Row = require('react-bootstrap').Row;

var TheaterCell = React.createClass({
  propTypes: {},
  mixins: [Navigation, State],
  getInitialState: function() {
    return {
      theater: TheaterStore.getTheater(),
    };
  },
  componentDidMount: function () { 
    TheaterStore.addChangeListener(this._onChange);
    TheaterActions.getTheater();
  },
  componentWillUnmount: function () {
    TheaterStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({
      theater: TheaterStore.getTheater()
    });
  },
  render: function(){
    return (
      <Col className="theater-cell"
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Col className="back-icon-container"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <Image className="back-icon" 
            src={require('../../assets/back-arrow.svg')} 
          />
        </Col>
        <Col className="theater-info"
          xs={10}
          sm={10}
          md={10}
          lg={10}
        >
          <Row className="theater-name">
            {this.state.theater.name.toUpperCase()}
          </Row>
          <Row className="theater-address">
            {this.state.theater.address}
          </Row>
        </Col>
      </Col>
    );
  }
});

module.exports = TheaterCell;