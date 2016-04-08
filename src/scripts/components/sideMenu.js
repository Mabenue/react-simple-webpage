import React from 'react';

require('./sideMenu.scss');

var SideMenu = React.createClass({
    render: function() {
        var items = [];
        this.props.items.forEach(function(item){
            items.push(<li><a href={item.url}>{item.name}</a></li>);
        });
        var title = this.props.title;
        return (
            <div className='sideMenu'>
                <div className='menuTitleArea'>
                    <span className='menuTitle'>{title}</span>
                </div>
                <div className='menuContent'>
                    <ul className='items'>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }        
});

export default SideMenu;
