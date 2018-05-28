import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import BackgroundShader from './BackgroundShader';
import CryptoDonationTile from './CryptoDonationTile';
import Footer from './Footer';
import PageTitle from './PageTitle';

import { WALLET_ADDRESSES } from '../constants/cms'

class DonatePage extends Base {
    handleShapeShiftClick() {
        window.open('https://shapeshift.io/shifty.html?destination=0xfd5e7D9B422b12022d1488710AA7a1d2F40bA0C4&amp;output=ETH&amp;apiKey=0293c6be27b0b7668aed3e678528b716fd1fb6ff52c97f2337c6b6a3e9479e6928c96175b20d3b820d8074610b4601a3bbffbe318cae5c2294a5f69e2ab4737d','1418115287605','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0')
    }
    renderWalletDonationTiles() {
        return WALLET_ADDRESSES.map((ca, i) => {
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
                    <div className='wallets-container'>
                        {this.renderWalletDonationTiles()}
                    </div>
                    <div className='services-container'>
                        <span className='paypal'>
                            <p>Paypal</p>
                            <div className='paypal-button'>
                                <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'>
                                    <input type='hidden' name='cmd' value='_s-xclick'/>
                                    <input type='hidden' name='hosted_button_id' value='JDZJ3928AHGPS'/>
                                    <input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'/>
                                    <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'/>
                                </form>
                            </div>
                        </span>
                        <span className='shapeshift'>
                            <p>Shapeshift</p>
                            <div onClick={this.handleShapeShiftClick}/>
                        </span>
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
