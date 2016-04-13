'use strict';

import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';

import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

import MenuItem from 'material-ui/lib/menus/menu-item';

import { getRequest } from '../utils/lib';

const appBarStyle = {
    backgroundColor: '#26a69a'
}
const menuItemStyle = {
}
const Main = React.createClass({
    getInitialState(){
        return {
            showLeftBar: false
        };
    },
    handleToggleLeftNav(){
        this.setState({showLeftBar: !this.state.showLeftBar});
    },
    newGame8x8(){
        getRequest('/generate').then(
            response => {
                console.log(response);
            },
            response => {
                console.log(response);
            }
        );
    },
    render(){
        return (<div>
            <AppBar
                title="Game of Live"
                style={appBarStyle}
                iconElementLeft={
                    <IconButton
                        onTouchTap={this.handleToggleLeftNav}
                    >
                        <NavigationMenu />
                    </IconButton>
                }
            />
            <LeftNav
                width={150}
                open={this.state.showLeftBar}
            >
                <AppBar
                    title="Start"
                    style={appBarStyle}
                    showMenuIconButton={false}
                    iconElementRight={
                        <IconButton
                            onTouchTap={this.handleToggleLeftNav}
                        >
                            <NavigationClose />
                        </IconButton>
                    }
                />
                <MenuItem
                    onTouchTap={this.newGame8x8}
                    style={menuItemStyle}
                >
                    8 x 8
                </MenuItem>
            </LeftNav>
            <div className="color-box"></div>
        </div>);
    }
});

export default Main;
