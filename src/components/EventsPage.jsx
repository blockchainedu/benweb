import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Base from './Base';
import Button from './Button';
import Footer from './Footer';
import PageTitle from './PageTitle';

class EventsPage extends Base {
    handleEventClick = () => {
        this.props.goToSubmitEvent()
    }
    render() {
        return (
            <div className='EventsPage'>
                <PageTitle
                    header='Events'
                    description={
                        <Button onClick={this.handleEventClick}>
                            <p>Submit an upcoming event</p>
                        </Button>
                    }
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shr4mwgDb4RDdI8Ik?backgroundColor=green&viewControls=on' frameBorder='0'></iframe>
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
        goToSubmitEvent: () => dispatch(push('/submit-event'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
