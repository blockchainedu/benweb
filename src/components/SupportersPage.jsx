import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Footer from './Footer';
import PageTitle from './PageTitle';

class SupportersPage extends Base {
    render() {
        return (
            <div className='SupportersPage'>
                <PageTitle
                    header='Supporters'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrdpq23AoTSHdv2Z?backgroundColor=green' frameBorder='0'></iframe>
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

export default connect(mapStateToProps, mapDispatchToProps)(SupportersPage);
