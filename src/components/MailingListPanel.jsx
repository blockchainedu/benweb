import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import EmailSubmission from './EmailSubmission';

class MailingListPanel extends Base {
    render() {
        return (
            <div className='MailingListPanel'>
                <div className='logo'/>
                <p className='text'>
                    Subscribe to our mailing list.
                </p>
                <EmailSubmission/>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(MailingListPanel);
