import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button';
import Footer from './Footer';
import PageTitle from './PageTitle';

class EducationPage extends Base {
    handleResourceClick = () => {
        window.open('https://airtable.com/shr1SL2dLmLCl2DQB', '_blank')
    }
    render() {
        return (
            <div className='EducationPage'>
                <PageTitle
                    header='Resources to learn about blockchain'
                    description={
                        <Button onClick={this.handleResourceClick}>
                            <p>Add a resource to our educational repository</p>
                        </Button>
                    }
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shrpt8lHSZz1nc3LH?backgroundColor=pink&layout=card&viewControls=on' frameBorder='0'></iframe>
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
