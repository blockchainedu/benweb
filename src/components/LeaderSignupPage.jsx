import React from 'react';

import Base from './Base';
import PageTitle from './PageTitle';

export default class LeaderSignupPage extends Base {
    render() {
        return (
            <div className='LeaderSignupPage'>
                <PageTitle
                    header='Leader Signup'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrOy2NrnglYHPgXV?backgroundColor=orange' frameBorder='0'></iframe>
            </div>
        );
    }
}

