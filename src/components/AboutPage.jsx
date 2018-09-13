import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Footer from './Footer';
import PageTitle from './PageTitle';
import PageSection from './PageSection';

class AboutPage extends Base {
    render() {
        return (
            <div className='AboutPage'>
                <section>
                    <PageTitle
                        header='Grassroots Blockchain Education. For students, by students.'
                        description='BEN is made up of students and alumni across the world who are creating bitcoin and blockchain clubs on their academic campuses. By exploring this socioeconomic experiment within the safety of their peers, students build new expectations and innovations. In aggregate, the combined effort of all these clubs creates a rich web of interconnected blockchain hubs across the world. Impact global evolution through local your initiatives.'
                    />
                </section>
                <PageSection>
                    <PageTitle
                        header='How is BEN Organized?'
                        description={''}
                    />
                </PageSection>
                
                <PageSection>
                    <PageTitle
                        header='Local First'
                        description={'BEN is organized bottom up. Student blockchain clubs who share our vision are welcome to register as a chapter and use our network\'s connections and resources to amplify local impact. \n\nChapter Clubs have complete self-autonomy and are free to participate (or not) in global events. BEN moves forward by inspiring Chapters to join global initiatives through providing local benefit and explaining the international impact.'}
                    />
                    <PageTitle
                        header='Janitors, not Managers'
                        description={'BEN administrative roles are run by volunteers who organize opportunities for the network to seize. Roles are designated to recognize those already taking informal initiative, yet does not give authority over Chapter Clubs. The BEN staff exists to simplify Chapter access to resources and amplify Chapter initiatives. Regions are encouraged to have multiple region heads to create organization resiliency. If your region already has a Head, ask if they need help!'}
                    />
                    <PageTitle
                        header='Swarm Do-acracy'
                        description={'BEN is organized as a swarm to overcome conflict and to focus the efforts of members with varying opinions. The network benefits from multiple people trying things in different ways to share their results for others to improve upon. Thus if you don\'t like how something is being done, you vote by doing what you think is better. No one has the authority to limit or control the efforts another. Chapters have self-autonomy within their own organizations.'}
                    />
                </PageSection>

                <PageSection>
                    <PageTitle
                        header='The History of BEN'
                    />
                </PageSection>
                
                <PageSection>
                    <PageTitle
                        header='2014-15'
                        description={'Originally founded as the College Cryptocurrency Network (CCN) in 2014, BEN began as a casual facebook messenger group between bitcoin club leaders of MIT, Stanford, Michigan, Penn, and Delaware. After ballooning from a handful to over 40 student leaders over a few months, co-founders Jeremy Gardner and Daniel Bloch founded the organization and registered its status as a 501c3 Nonprofit. The casual community quickly transitioned into a growing organization as leading chapter schools hosted initiatives such as the MIT Airdrop and BayBitHack (Hackathon) at Berkeley.'}
                    />
                    <PageTitle
                        header='2015-16'
                        description={'The organization rebrands to the Blockchain Education Network as part of a larger effort to align with the changing direction of the industry. Dean Masley takes the reigns as executive director after Bloch and Gardner and started some new initiatives. Part of these initiatives was to pilot and experiment with cross-campus events. By connecting the various blockchain hubs through friendly competition, student leaders formed strong relationships between each other and amplified their local efforts. These competitions drew in large waves of new students who desired to setup their own clubs.'}
                    />
                    <PageTitle
                        header='2016-17'
                        description={'The success of cross-campus events from 2015-16 inspired the Fall 2016 Initiative. Designed to help students start and/or grow their blockchain clubs across the world, this cross-campus initiative ambitious seeks to propogate blockchain culture across university campuses.'}
                    />
                </PageSection>
                
                <PageTitle
                    header='BEN National Chapters'
                />
                <iframe className='airtable-embed' src='https://airtable.com/embed/shro1MPtZgd9Ivi72?backgroundColor=orange&viewControls=on' frameBorder='0'/>
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
