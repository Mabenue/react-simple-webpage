import ReactDOM from 'react-dom';
import React from 'react';
import WelcomeMsg from './components/welcomeMsg';
import SideMenu from './components/sideMenu.js';

require('../styles/base.scss'); //Yeah, require CSS!!!

ReactDOM.render(
  <WelcomeMsg />, document.getElementById('content')
);
