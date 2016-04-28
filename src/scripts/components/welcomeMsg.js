import React from 'react';
import SideMenu from './sideMenu.js';
import ProjectCard from './projectCard.js';

require('./welcomeMsg.scss');

var WelcomeMsg = React.createClass({
    render: function() {
        var links = [
            {name: 'About Me', url: '#aboutMe' },
            {name: 'Projects', url: '#projects' },
            {name: 'Contact', url: '#contact' }
        ];
        return (
            <div className='main'>
                <div className='sideNav'>
                    <SideMenu links={links}/>
                </div>
                <div className='welcomeMsg'>
                    <h1>Alex Conway</h1>
                    <h2 id="aboutMe">About Me</h2>
                    <p>Words lot of words and stuff of a text like nature. Just typing random shit to make a paragraph big enough so the area here does not look stupid or whatever. It is really annoying having to type out a random bunch of text to make a paragraph so I will stop typing now, hopefully there will be enough text now</p>
                    <h2 id="projects">Projects</h2>
                    <ProjectCard title='RobotWorld' text='Java programming game'/>
                    <ProjectCard title='Blog' text='Simple blog using angular, node, postgres'/>
                    <h2 id="contact">Contact</h2>
                </div>
            </div>
        );
    }
});

export default WelcomeMsg;
