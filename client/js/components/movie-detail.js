var React = require('react');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

// Flux Components
var MovieActions = require('../actions/movie-actions');
var MovieStore = require('../stores/movie-store');

// React Bootstrap Components
var Col = require('react-bootstrap').Col;
var Image = require('react-bootstrap').Image;
var Row = require('react-bootstrap').Row;

// Customized Components

var MovieList = React.createClass({
  propTypes: {},
  mixins: [Navigation, State],
  getInitialState: function() {
    console.log(this.props.params.index);
    return {
      movie: {
        title: '',
        rated: '',
        showtimes: [],
        summary: '',
        imageUrl: ''
      }
    };
  },
  componentDidMount: function () { 
    MovieStore.addChangeListener(this._onChange);
    MovieActions.getMovies();
  },
  componentWillUnmount: function () {
    MovieStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({
      movie: MovieStore.getMovies()[this.props.params.index]
    });
  },
  _onCloseButtonPress: function () {
    // Transitions to home when close button is pressed
    this.transitionTo('home');
  },
  render: function(){
    console.log(this.state.movie);
    return (
      <div className="detail-wrapper">
        <Row className="close-button-row">
          <div className="close-button"
            onClick={this._onCloseButtonPress}
          >
            CLOSE
            <Image className="close-icon" 
              src={require('../../assets/close.svg')} 
            />
          </div>
        </Row>
        <Row className="title">
          {this.state.movie.title.toUpperCase()}
        </Row>
        <Row className="detail">
          <p className="rated-container">
            Rated:<span className="rated">{this.state.movie.rated}</span>
          </p>
          <p>
            <Image className="poster" 
              src={this.state.movie.imageUrl}
            />
            {this.state.movie.summary}
          </p>
        </Row>
        <Row className="action-container">
          <Col className="button"
            xs={5}
            sm={5}
            md={5}
            lg={5}
          >
            WATCH TRAILER
          </Col>
          <Col className="button"
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xsOffset={2}
            smOffset={2}
            mdOffset={2}
            lgOffset={2}
          >
            BUY TICKETS
          </Col>
        </Row>
        <Image className="poster-background"
          src={this.state.movie.imageUrl}
        />
      </div>
    );
  }
});

var styles = {

};

module.exports = MovieList;