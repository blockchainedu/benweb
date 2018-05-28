import React from 'react';

import Base from './Base';
import Icon from './Icon';

export default class TeamMemberTile extends Base {
    renderExperience() {
        return this.props.experience.map((e, i) => {
            return <p key={'exp-' + i}>{e}</p>
        })
    }
    renderSocialLinks() {
        return this.props.social.map((s, i) => {
            return (
                <div
                    key={'sl-' + i}
                    onClick={() => window.open(s.url, '_blank')}
                >
                    <a href={s.url} className='social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-twitter'/>
                    </a>
                </div>
            )
        })
    }
    render() {
        const {
            name,
            imageUrl,
            title
        } = this.props

        const backgroundImageStyle = {
            backgroundImage: 'url("' + imageUrl + '")'
        }

        return (
            <div className='TeamMemberTile'>
                <div className='member-image' style={backgroundImageStyle}/>
                <h6>{name}</h6>
                <span className='title'>{title}</span>
                <div className='experience'>
                    {this.renderExperience()}
                </div>
                <div className='flex'/>
                <div className='social-links'>
                    {this.renderSocialLinks()}
                </div>
            </div>
        );
    }
}

