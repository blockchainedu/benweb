import React from 'react';

import Base from './Base';
import PageTitle from './PageTitle';

export default class SubmitEventPage extends Base {
    render() {
        return (
            <div className='SubmitEventPage'>
                <PageTitle
                    header='Submit a BEN Event'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shr3hIVfObvFicDIQ?backgroundColor=green' frameBorder='0'></iframe>
            </div>
        );
    }
}

