import React from 'react';

import Base from './Base';
import Button from './Button';
import FeaturedMetrics from './FeaturedMetrics';
import Footer from './Footer';
import Icon from './Icon';
import LandingTitle from './LandingTitle';
import LandingCallsToAction from './LandingCallsToAction';

export default class LandingPage extends Base {
    render() {
        return (
            <div className='LandingPage'>
                <div className='shade'/>
                <section>
                    <LandingTitle/>
                    <LandingCallsToAction/>
                    <FeaturedMetrics/>
                </section>
                
                <Footer/>
            </div>
        );
    }
}