import React from 'react';

require('./sideMenu.scss');

var SideMenu = React.createClass({
    getInitialState: function(){
        return { breadcrumb: "Boob"};
    },
    render: function() {
        var links = [];
        this.props.links.forEach(function(link){
            links.push(<li><a href={link.url}>{link.name}</a></li>);
        });
        var title = this.state.breadcrumb;
        return (
            <div className='sideMenu'>
                <div className='menuTitleArea'>
                    <span className='menuTitle'>{title}</span>
                </div>
                <div className='menuContent'>
                    <ul className='linkList'>
                        {links}
                    </ul>
                </div>
            </div>
        );
    }        
});

export default SideMenu;
