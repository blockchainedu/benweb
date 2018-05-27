import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import BackgroundShader from './BackgroundShader';
import Footer from './Footer';
import PageTitle from './PageTitle';

class DonatePage extends Base {
    render() {
        return (
            <div className='DonatePage'>
                <section>
                    <PageTitle
                        header='Support Us'
                        description={'Join our mission in creating open access to the most powerful tools of our generation.'}
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

export default connect(mapStateToProps, mapDispatchToProps)(DonatePage);
