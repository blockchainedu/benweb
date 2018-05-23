import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';

class MailingListPanel extends Base {
    render() {
        return (
            <div className='MailingListPanel'>
                <div className='col-lg-4 mb-5 mb-lg-0'>
                    <img src='assets/img/logo-inverse.png' alt=''/>
                    <p className='u-my-40'>
                        Subscribe to our mailing list.
                    </p>
                    <form className='form-inline'>
                        <div className='input-group box-shadow-v1 u-rounded-50 bg-white u-of-hidden'>
                            <div className='input-group-addon bg-white border-0 pl-4 pr-0'>
                                <span className='icon icon-Mail text-primary'></span>
                            </div>
                            <input type='text' className='form-control border-0 p-3' placeholder='Enter your email'/>
                            <button type='submit' className='input-group-btn btn bg-white'>
                                <span className='icon icon-Arrow text-primary'></span>
                            </button>
                        </div>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(MailingListPanel);
