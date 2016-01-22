var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieConstants = require('../constants/movie-constants');

var movies = require('../../data/movies');

var MovieActions = {

  // Action to get all the movies
  getMovies: function () {
    AppDispatcher.handleAction({
      actionType: MovieConstants.GET_MOVIES,
      movies: movies
    });
  }
};

module.exports = MovieActions;
