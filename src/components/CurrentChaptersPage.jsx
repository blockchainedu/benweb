import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button';
import Footer from './Footer';
import PageTitle from './PageTitle';

class CurrentChaptersPage extends Base {
    render() {
        return (
            <div className='CurrentChaptersPage'>
                <PageTitle
                    header='Leader Signup'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrOy2NrnglYHPgXV?backgroundColor=orange' frameBorder='0'></iframe>
                <PageTitle
                    header='Chapter Signup'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrzTpaMsslfGuS0l?backgroundColor=orange' frameBorder='0'></iframe>
                <PageTitle
                    header='Submit a BEN Event'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shr3hIVfObvFicDIQ?backgroundColor=green' frameBorder='0'></iframe>
                <PageTitle
                    header='Social Hype Form'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrr7XWi2ehLTuUdl?backgroundColor=orange' frameBorder='0'></iframe>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChaptersPage);
