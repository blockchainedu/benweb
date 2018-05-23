import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import ContactInfoPanel from './ContactInfoPanel';
import MailingListPanel from './MailingListPanel';

class Footer extends Base {
    render() {
        return (
            <div className='Footer'>
                <div className='features-container'>
                    <MailingListPanel/>
                    <ContactInfoPanel/>
                </div>
                <div className='tagline-container'>
                    <p>Made with love for you</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
