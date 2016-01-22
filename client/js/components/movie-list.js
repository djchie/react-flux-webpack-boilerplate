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

var MovieList = React.createClass({
  propTypes: {},
  mixins: [Navigation, State],
  getInitialState: function() {
    return {
      movies: MovieStore.getMovies()
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
      movies: MovieStore.getMovies()
    });
  },
  _onMovieCellPress: function (i) {
    console.log(i);
    this.transitionTo('movieDetail', {index: i});
  },
  render: function(){
    var movieCells = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      var cellClass = 'movie-cell dark-cell';
      if (i % 2 === 1) {
        cellClass = 'movie-cell light-cell';
      }
      movieCells.push(
        <Col className={cellClass}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          onClick={this._onMovieCellPress.bind(this, i)}
        >
          <Col className="heart-icon-container"
            xs={1}
            sm={1}
            md={1}
            lg={1}
          >
            <Image className="heart-icon" 
              src={require('../../assets/heart.svg')} 
            />
          </Col>
          <Col className="movie-info"
            xs={10}
            sm={10}
            md={10}
            lg={10}
          >
            <Row className="movie-title">
              {this.state.movies[i].title}
              <span className="movie-rated">
                {this.state.movies[i].rated}
              </span>
            </Row>
            <Row className="showtimes">
              {this.state.movies[i].showtimes.join(', ')}
            </Row>
          </Col>
          <Col className="arrow-icon-container"
            xs={1}
            sm={1}
            md={1}
            lg={1}
          >
            <Image className="arrow-icon" 
              src={require('../../assets/arrow.svg')} 
            />
          </Col>
        </Col>
      );
    }
    return (
      <div>
        {movieCells}
      </div>
    );
  }
});

module.exports = MovieList;