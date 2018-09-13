import React from 'react';

import Base from './Base';
import MetricsTile from './MetricsTile';

const METRICS = [
    {
        name: 'Countries',
        number: '96+'
    },
    {
        name: 'Universities',
        number: '213+'
    },
    {
        name: 'Members',
        number: '4000+'
    }
]
export default class FeaturedMetrics extends Base {
    renderMetricsTiles() {
        return METRICS.map((m, i) => {
            return (
                <MetricsTile
                    key={'mt-' + i}
                    {...m}
                />
            )
        })
    }
    render() {
        return (
            <div className='FeaturedMetrics'>
                <section>
                    {this.renderMetricsTiles()}
                </section>
            </div>
        );
    }
}

