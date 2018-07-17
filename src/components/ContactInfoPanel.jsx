import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Icon from './Icon';

import { CONTACT_INFO } from '../constants';

class ContactInfoPanel extends Base {
    render() {
        return (
            <div className='ContactInfoPanel'>
                <h6>Contact Info</h6>
                <div className='divider'/>
                <div className='main-container'>
                    <div className='row-nowrap align-center'>
                        <Icon faIconName='envelope'/>
                        <p>{CONTACT_INFO.email}</p>
                    </div>
                </div>
                <ul className='social-container row-nowrap'>
                    <a href='https://www.facebook.com/blockchainedu/' className='social-link'>
                        <i className='fab fa-facebook-f'/>
                    </a>
                    <a href='https://twitter.com/blockchainedu' className='social-link'>
                        <i className='fab fa-twitter'/>
                    </a>
                    <a href='https://medium.com/blockchain-education-network' className='social-link'>
                        <i className='fab fa-medium-m'/>
                    </a>
                    <a href='https://bit.ly/BENdiscord' className='social-link'>
                        <i className='fab fa-discord'/>
                    </a>
                    <a href='https://github.com/blockchainedu' className='social-link'>
                        <i className='fab fa-github'/>
                    </a>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoPanel);
