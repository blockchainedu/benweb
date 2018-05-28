import React from 'react';

import Base from './Base';

export default class CryptoDonationTile extends Base {
    render() {
        const {
            name,
            logoImageUrl,
            address,
            qrSourceData
        } = this.props

        const backgroundImageStyle = {
            backgroundImage: 'url("' + logoImageUrl + '")'
        }

        return (
            <div className='CryptoDonationTile'>
                <div className='coin-image' style={backgroundImageStyle}/>
                <h6>{name}</h6>
                <span className='address'>{address}</span>
                <img className='qr-block' src={qrSourceData}/>
            </div>
        );
    }
}

