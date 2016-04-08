import ReactDOM from 'react-dom';
import React from 'react';
import WelcomeMsg from './components/welcomeMsg';

require('../styles/base.scss'); //Yeah, require CSS!!!

var features = [
  {name: 'Development and Production configuration and scripts', url: ''}
];

ReactDOM.render(
  <WelcomeMsg features={features} />, document.getElementById('content')
);
