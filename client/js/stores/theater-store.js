var AppDispatcher = require('../dispatcher/AppDispatcher');
var TheaterConstants = require('../constants/theater-constants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  theater: {
    name: '',
    address: ''
  }
};

function _setTheater (theater) {
  _store.theater = theater;
}

var TheaterStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getTheater: function () {
    return _store.theater;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case TheaterConstants.GET_THEATER:
      _setTheater(action.theater);
      console.log('Retrieved theater', _store);
      break;
    default:
      return true;
  }

  TheaterStore.emitChange();
});

module.exports = TheaterStore;
