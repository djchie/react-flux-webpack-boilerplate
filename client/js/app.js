import React from 'react';
import Router from 'react-router';
import routes from './config/routes';
import '../css/style.css';

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('app'));
});