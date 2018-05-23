import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Footer from './Footer';
import PageTitle from './PageTitle';

class EducationPage extends Base {
    render() {
        return (
            <div className='EducationPage'>
                <section>
                    <PageTitle
                        header='Frequently Asked Questions'
                        description={'Probably you\'ll find your answer here. Contact us if you don\'t find what you\'re looking for.'}
                    />
                </section>
                
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
