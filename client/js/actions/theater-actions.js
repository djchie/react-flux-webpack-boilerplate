var AppDispatcher = require('../dispatcher/AppDispatcher');
var TheaterConstants = require('../constants/theater-constants');

var theater = require('../../data/theater');

var TheaterActions = {

  // Action to get theater
  getTheater: function () {
    AppDispatcher.handleAction({
      actionType: TheaterConstants.GET_THEATER,
      theater: theater
    });
  }
};

module.exports = TheaterActions;
