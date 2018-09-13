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
                        header='Team'
                        description={'Reach out to us if you\'d like to get involved'}
                    />
                </section>

                <div className='team-container'>
                    <PageTitle
                        header='BEN Global Directors'
                        description={''}
                    />
                    <iframe className='airtable-embed' src='https://airtable.com/embed/shrXe7Vh9oN5slJqi?backgroundColor=orange' frameBorder='0'/>
                    <PageTitle
                        header='BEN National Directors'
                        description={''}
                    />
                    <iframe className='airtable-embed' src='https://airtable.com/embed/shrf8DerO83sAxnbr?backgroundColor=orange' frameBorder='0'/>
                    <PageTitle
                        header='BEN Advisors'
                        description={''}
                    />
                    <iframe className='airtable-embed' src='https://airtable.com/embed/shrHWnY9fMHf8uLxQ?backgroundColor=orange' frameBorder='0'/>
                    {/*<div className='members-container'>
                        {this.renderMemberTiles()}
                    </div>*/}

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
