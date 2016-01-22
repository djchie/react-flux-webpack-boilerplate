var React = require('react');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

// React Bootstrap Components
var Col = require('react-bootstrap').Col;
var Image = require('react-bootstrap').Image;
var Row = require('react-bootstrap').Row;

var DateCell = React.createClass({
  propTypes: {},
  mixins: [Navigation, State],
  render: function(){
    return (
      <div>
        <Col className="date-cell"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Col className="showing"
            xs={6}
            sm={6}
            md={6}
            lg={6}
          >
            SHOWINGS
          </Col>
          <Col className="date"
            xs={6}
            sm={6}
            md={6}
            lg={6}
          >
            7/29/2014
          </Col>
        </Col>
      </div>
    );
  }
});

module.exports = DateCell;