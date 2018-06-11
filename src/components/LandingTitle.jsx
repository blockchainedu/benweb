import React from 'react';

import Base from './Base';
import AutomagicallyTypedTaglines from './AutomagicallyTypedTaglines';

export default class LandingTitle extends Base {
    render() {
        return (
            <div className='LandingTitle'>
                <div className='animated-tagline'>
                    <h1>We build open, decentralized </h1>
                    <AutomagicallyTypedTaglines
                        taglines={['technology', 'communities']}
                    />
                </div>
                <p className='description'>
                    The Blockchain Education Network is a 501(c)3 nonprofit dedicated to creating a world that is more open and free by providing a foundation for blockchain education and innovation.
                </p>
            </div>
        );
    }
}

