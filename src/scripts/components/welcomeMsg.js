import React from 'react';
import SideMenu from './sideMenu.js';

require('./welcomeMsg.scss');
var reactLogo = require('../../images/react-logo.svg'); //Yeah, require Images!!!

var WelcomeMsg = React.createClass({
    render: function() {
        var features = [];
        this.props.features.forEach(function(feature){
            features.push(<li><a href={feature.url}>{feature.name}</a></li>);
        });
        var items = [
            {name: 'Cool Stuff!!!', url: '#' }
        ];
        return (
            <div className='main'>
                <div className='welcomeMsg'>
                    Welcome!
                    <img width='50px' height='50px' src={reactLogo}/>
                </div>
            <div className='sideNav'>
                <SideMenu title='Home' items={items}/>
            </div>
                Features include:
                <ul className='featureList'>
                    {features}
                </ul>
            </div>
        );
    }
});

export default WelcomeMsg;
