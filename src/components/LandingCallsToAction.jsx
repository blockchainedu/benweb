import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Base from './Base';
import Button from './Button';

class LandingCallsToAction extends Base {
    handleJoinBen() {
        window.open('https://bit.ly/BENdiscord', '_blank')
    }
    render() {
        return (
            <div className='LandingCallsToAction'>
                <Button onClick={this.handleJoinBen} className='join'>
                    <p>Join BEN</p>
                </Button>
                <Button onClick={this.props.goToDonate}>
                    <p>Donate</p>
                </Button>
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
        goToDonate: () => dispatch(push('/donate'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingCallsToAction);
