import React from 'react';

require('./projectCard.scss');

var ProjectCard = React.createClass({
    render: function() {
        var title = this.props.title;
        var text = this.props.text;
        return (
            <div className='projectCard'>
                <span>{title}</span>
                <p>{text}</p>
            </div>      
        );
    }
});

export default ProjectCard;
