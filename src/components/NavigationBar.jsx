import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Base from './Base';
import Icon from './Icon';
import NavLinkItem from './NavLinkItem';

import { NAVIGATION } from '../constants/cms';

class NavigationBar extends React.Component {
    state = {
        opened: false
    }
    handleNavClick = (route) => {
        this.setState({ opened: false })
    }
    renderNavItem = (item, i) => {
        return (
            <NavLinkItem
                key={'nvl-' + i}
                route={item.routes[0]}
                onClick={() => this.handleNavClick(item.routes[0])}
                {...item}
            />
        )
    }
    render() {
        return (
            <div className={'NavigationBar' + (this.state.opened ? ' opened' : '')}>
                <div className='logo-container' onClick={this.props.goToHome}>
                    <div className='logo'/>
                </div>
                <div className={'nav-container' + (this.state.opened ? ' opened' : '')}>
                    {NAVIGATION.items.map(this.renderNavItem)}
                </div>
                <Icon faIconName='bars' onClick={() => this.setState({ opened: !this.state.opened })}/>
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
        goToHome: () => dispatch(push('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
