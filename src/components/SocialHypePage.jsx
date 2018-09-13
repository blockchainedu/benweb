import React from 'react';

import Base from './Base';
import PageTitle from './PageTitle';

export default class SocialHypePage extends Base {
    render() {
        return (
            <div className='SocialHypePage'>
                <PageTitle
                    header='Social Hype Form'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrr7XWi2ehLTuUdl?backgroundColor=orange' frameBorder='0'></iframe>
            </div>
        );
    }
}

