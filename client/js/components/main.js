var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = React.createClass({
  render: function(){
    return (
      <span>
        <RouteHandler />
      </span>
    );
  }
});

module.exports = Main;