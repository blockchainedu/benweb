import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Base from './Base';
import Button from './Button';
import Footer from './Footer';
import PageTitle from './PageTitle';

class ChaptersPage extends Base {
    handleResourceClick = () => {
        this.props.goToChapterSignup()
    }
    render() {
        return (
            <div className='ChaptersPage'>
                <PageTitle
                    header='BEN Chapters'
                    description={
                        <Button onClick={this.handleResourceClick}>
                            <p>{'Can\'t find a chapter near you? Start a BEN Chapter'}</p>
                        </Button>
                    }
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shro1MPtZgd9Ivi72?backgroundColor=orange&viewControls=on' frameBorder='0'/>
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
        goToChapterSignup: () => dispatch(push('/chapter-signup'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersPage);
