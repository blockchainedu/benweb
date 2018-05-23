import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import NavLinkItem from './NavLinkItem';

import { NAVIGATION } from '../constants';

class NavigationBar extends Base {
    renderNavItem(item, i) {
        console.log(NavLinkItem)
        return (
            <NavLinkItem
                key={'nvl-' + i}
                route={item.routes[0]}
                {...item}
            />
        )
    }
    render() {
        return (
            <div className='NavigationBar'>
                <div className='logo-container'>
                    <div className='logo'/>
                </div>
                <div className='nav-container'>
                    {NAVIGATION.items.map(this.renderNavItem)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
