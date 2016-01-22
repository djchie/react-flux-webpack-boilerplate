var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Main = require('../components/main');
var Home = require('../components/home');
var MovieDetail = require('../components/movie-detail');

var routes = (
  <Route handler={Main} >
    <Route name="home" path="/" handler={Home} />
    <Route name="movieDetail" path="/details/:index" handler={MovieDetail} />
    <Route name="other" path="/*" handler={Home} />
  </Route>
);

module.exports = routes;