import React from 'react';
import SideMenu from './sideMenu.js';
import ProjectCard from './projectCard.js';

require('./welcomeMsg.scss');
var reactLogo = require('../../images/react-logo.svg'); //Yeah, require Images!!!

var WelcomeMsg = React.createClass({
    render: function() {
        var features = [];
        this.props.features.forEach(function(feature){
            features.push(<li><a href={feature.url}>{feature.name}</a></li>);
        });
        var links = [
            {name: 'About Me', url: '#' },
            {name: 'Projects', url: '#' },
            {name: 'Contact', url: '#' }
        ];
        return (
            <div className='main'>
                <div className='welcomeMsg'>
                    <h1>Alex Conway</h1>
                    <div className='sideNav'>
                        <SideMenu title='Home' links={links}/>
                    </div>
                    <h2>About Me</h2>
                    <p>Words lot of words and stuff of a text like nature. Just typing random shit to make a paragraph big enough so the area here does not look stupid or whatever. It is really annoying having to type out a random bunch of text to make a paragraph so I will stop typing now, hopefully there will be enough text now</p>
                    <h2>Projects</h2>
                    <ProjectCard title='RobotWorld' text='Java programming game'/>
                    <ProjectCard title='Blog' text='Simple blog using angular, node, postgres'/>
                    <h2>Contact</h2>
                    <img width='50px' height='50px' src={reactLogo}/>
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
