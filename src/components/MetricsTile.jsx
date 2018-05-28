import React from 'react';

import Base from './Base';

export default class MetricsTile extends Base {
    render() {
        return (
            <div className='MetricsTile'>
                <div className='tile-container'>
                    <h2>
                        {this.props.number}
                    </h2>
                    <p>
                        {this.props.name}
                    </p>
                </div>
                
            </div>
        );
    }
}

