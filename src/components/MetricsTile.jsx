import React from 'react';

import Base from './Base';

export default class MetricsTile extends Base {
    render() {
        return (
            <div className='MetricsTile'>
                <section>
                    <h2>
                        {this.props.number}
                    </h2>
                    <p>
                        {this.props.name}
                    </p>
                </section>
                
            </div>
        );
    }
}

