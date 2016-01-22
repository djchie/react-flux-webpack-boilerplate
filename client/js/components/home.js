var React = require('react');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

// Flux Components
var TheaterActions = require('../actions/theater-actions');
var TheaterStore = require('../stores/theater-store');

// React Bootstrap Components
var Input = require('react-bootstrap').Input;
var Col = require('react-bootstrap').Col;
var Image = require('react-bootstrap').Image;
var Row = require('react-bootstrap').Row;

// Customized Components
var TheaterCell = require('./theater-cell');
var DateCell = require('./date-cell');
var MovieList = require('./movie-list');
var Footer = require('./footer');

var Home = React.createClass({
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
      <div>
        <div className="search-input-container">
          <Image className="search-icon" 
            src={require('../../assets/search.svg')} 
          />
          <Input className="search-input"
            type="text"
            placeholder="Search..."
          />
        </div>
        <TheaterCell />
        <DateCell />
        <MovieList />
        <div className="clear" />
        <Footer />
      </div>
    );
  }
});

module.exports = Home;