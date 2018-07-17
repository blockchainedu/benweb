import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button';
import Footer from './Footer';
import PageTitle from './PageTitle';

class EducationPage extends Base {
    handleChapterEvent = () => {
        window.open('https://airtable.com/shrDmye4iS7IsoyTN', '_blank')
    }
    handleIndustryEvent = () => {
        window.open('https://airtable.com/shr1SL2dLmLCl2DQB', '_blank')
    }
    render() {
        return (
            <div className='EducationPage'>
                <PageTitle
                    header='Chapter Events'
                    description={
                        <Button onClick={this.handleChapterEvent}>
                            <p>Submit a chapter meeting or event</p>
                        </Button>
                    }
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrv2JaUzhNJ6dy5y?backgroundColor=yellow&viewControls=on' frameBorder='0'></iframe>
                <PageTitle
                    header='Industry Events'
                    description={
                        <Button onClick={this.handleIndustryEvent}>
                            <p>Submit a blockchain industry event</p>
                        </Button>
                    }
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrxcmttT98OCGiBL?backgroundColor=orange&viewControls=on' frameBorder='0'></iframe>
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

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);
