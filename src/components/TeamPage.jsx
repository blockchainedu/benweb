import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Footer from './Footer';
import PageTitle from './PageTitle';
import TeamMemberTile from './TeamMemberTile';

import { TEAM_MEMBERS } from '../constants/cms'

class TeamPage extends Base {
    renderMemberTiles() {
        return TEAM_MEMBERS.map((tm, i) => {
            return (
                <TeamMemberTile
                    key={'tm-' + i}
                    {...tm}
                />
            )
        })
    }
    render() {
        return (
            <div className='TeamPage'>
                <section>
                    <PageTitle
                        header='Awesome Team'
                        description='Meet the amazing team behind this project and find out more about how we work.'
                    />
                </section>

                <div className='team-container'>
                    <PageTitle
                        header='The Executive Team'
                        description={''}
                    />
                    <div className='members-container'>
                        {this.renderMemberTiles()}
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
