import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Footer from './Footer';
import PageTitle from './PageTitle';

class TeamPage extends Base {
    render() {
        return (
            <div className='TeamPage'>
                <section>
                    <PageTitle
                        header='Awesome Team'
                        description='Meet the amazing team behind this project and find out more about how we work.'
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
