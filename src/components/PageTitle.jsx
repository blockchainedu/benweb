import React from 'react';

import Base from './Base';

const PageTitle = ({ header, description }) => {
    return (
        <div className='PageTitle'>
            <h3>{header}</h3>
            <div className='divider'/>
            <h6>{description}</h6>
        </div>
    );
}

export default PageTitle