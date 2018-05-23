import React from 'react';

import Base from './Base';

export default class LandingTitle extends Base {
    render() {
        return (
            <div className='LandingTitle'>
                <h1 className='display-4 u-fw-600 text-white u-mb-40'>
                  We build open, decentralized <span className='text-yellow' data-type='technology, communities'></span>
                  <span className='typed-curcor text-yellow'>|</span>
                </h1>
                <p className='u-fs-22 text-white u-lh-1_8 u-mb-40'>
                  The Blockchain Education Network is a 501(c)3 nonprofit dedicated to creating a world that is more open and free by providing a foundation for blockchain education and innovation.
                </p>
            </div>
        );
    }
}

