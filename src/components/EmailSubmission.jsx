import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';
import TextInput from './TextInput';

import { submitEmail } from '../reducers/contact'

import { validateEmail as validate } from '../scripts/validation';

class EmailSubmission extends Base {
    constructor(props) {
        super(props)
        this.autoBind('handleSubmit')
    }
    handleSubmit(values) {
        console.log('handleSubmit')
        console.log(values)
        this.props.submitEmail(values)
    }
    render() {
        const {
            handleSubmit,
            emailSubmitted
        } = this.props;

        return (
            <div className='EmailSubmission'>
                {emailSubmitted
                    ?
                        <p>{'We\'ve added you to our mailing list!'}</p>
                    :
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <Icon faIconName='envelope'/>
                            <Field 
                                name='email'
                                component={TextInput}
                                className='email-field'
                                label='Enter your email'
                                type='text' 
                            />
                            <div className='submit-button' onClick={handleSubmit(this.handleSubmit)}>
                                <Icon faIconName='caret-right'/>
                            </div>
                        </form>
                }

            </div>
        );
    }
}

EmailSubmission = reduxForm({
    form: 'email-submission-form',
    validate,
})(EmailSubmission);

const mapStateToProps = ({ contact }) => {
    return {
        emailSubmitted: contact.emailSubmitted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitEmail: (params) => dispatch(submitEmail(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailSubmission);
