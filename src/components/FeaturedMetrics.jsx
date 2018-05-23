import React from 'react';

import Base from './Base';
import MetricsTile from './MetricsTile';

const METRICS = [
    {
        name: 'Years',
        number: '4'
    },
    {
        name: 'Countries',
        number: '60+'
    },
    {
        name: 'Campuses',
        number: '300+'
    },
    {
        name: 'Members',
        number: '2400+'
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

