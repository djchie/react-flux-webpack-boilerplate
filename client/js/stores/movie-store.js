var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieConstants = require('../constants/movie-constants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  movies: []
};

function _setMovies (movies) {
  _store.movies = movies;
}

var MovieStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getMovies: function () {
    return _store.movies;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case MovieConstants.GET_MOVIES:
      _setMovies(action.movies);
      console.log('Retrieved movies', _store);
      break;
    default:
      return true;
  }

  MovieStore.emitChange();
});

module.exports = MovieStore;
