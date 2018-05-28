import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Footer from './Footer';
import PageTitle from './PageTitle';

class AboutPage extends Base {
    render() {
        return (
            <div className='AboutPage'>
                <section>
                    <PageTitle
                        header='About Us'
                        description='Learn about our history, mission, and vision'
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
