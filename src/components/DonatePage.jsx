import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import BackgroundShader from './BackgroundShader';
import CryptoDonationTile from './CryptoDonationTile';
import Footer from './Footer';
import PageTitle from './PageTitle';

import { CRYPTO_ADDRESSES } from '../constants/cms'

class DonatePage extends Base {
    renderCryptoDonationTiles() {
        return CRYPTO_ADDRESSES.map((ca, i) => {
            return (
                <CryptoDonationTile
                    key={'ca-' + i}
                    {...ca}
                />
            )
        })
    }
    render() {
        return (
            <div className='DonatePage'>
                <section>
                    <PageTitle
                        header='Support Us'
                        description={'Join our mission in creating open access to the most powerful tools of our generation.'}
                    />
                </section>
                <div className='donate-container'>
                    <PageTitle
                        header='Donate through PayPal, Shapeshift, or directly!'
                        description={''}
                    />
                    <div className='crypto-container'>
                        {this.renderCryptoDonationTiles()}
                    </div>
                </div>
                
                
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
