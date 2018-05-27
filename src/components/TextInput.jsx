import React from 'react';

import Base from './Base';

export default class TextInput extends Base {
    constructor(props) {
        super(props);
       
    }
    render() {
        const { input, type, className, disabled, placeholder } = this.props;
        
        return (
            <div className={`TextInput ${className}`}> 
                <input 
                    {...input}
                    disabled={disabled}
                    className='input-field'
                    placeholder={placeholder}
                    type={type}
                />     
            </div>
        );
    }
}