var React = require('react');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

// React Bootstrap Components
var Col = require('react-bootstrap').Col;
var Image = require('react-bootstrap').Image;
var Row = require('react-bootstrap').Row;

var Footer = React.createClass({
  propTypes: {},
  mixins: [Navigation, State],
  render: function(){
    return (
      <Col className="footer"
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Col className="sort-button"
          xs={5}
          sm={5}
          md={5}
          lg={5}
        >
          All Ratings
          <span className="triangle">&#9650;</span>
        </Col>
        <Col className="share"
          xs={7}
          sm={7}
          md={7}
          lg={7}
        >
          SHARE
          <Image className="share-icon" 
            src={require('../../assets/twitter.svg')} 
          />
          <Image className="share-icon" 
            src={require('../../assets/facebook.svg')} 
          />
        </Col>
      </Col>
    );
  }
});

module.exports = Footer;