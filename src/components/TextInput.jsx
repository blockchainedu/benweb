import React from 'react';

import Base from './Base';

export default class TextInput extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        const { input, meta: { touched, error }, name, label, text, type, className, disabled } = this.props;
        
        return (
            <div className={`TextInput ${className || ''}`}> 
                <input 
                    {...input}  
                    disabled={disabled}
                    required
                    className='input_fields'
                    type={type}
                />
                <label
                    htmlFor={name} 
                    className={`main_label ${disabled ? 'disabled' : 'enabled'} `}
                >
                    {label}
                </label>
                {touched && error &&
                    <label
                        className='error_label'
                        htmlFor={name}
                    >
                        {error}
                    </label>
                }
            </div>
        );
    }
}