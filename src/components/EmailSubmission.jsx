import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';
import TextInput from './TextInput';

class EmailSubmission extends Base {
    handleSubmit() {
        console.log('handleSubmit')

        return false
    }
    render() {
        return (
            <div className='EmailSubmission'>
                <form onSubmit={this.handleSubmit}>
                    <Icon faIconName='envelope'/>
                    <TextInput
                        type='text'
                        placeholder='Enter your email'
                    />
                    <div className='submit-button' onClick={this.handleSubmit}>
                        <Icon faIconName='caret-right'/>
                    </div>
                </form>


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

export default connect(mapStateToProps, mapDispatchToProps)(EmailSubmission);
