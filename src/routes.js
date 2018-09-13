import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';
import AboutPage from './components/AboutPage';
import ChaptersPage from './components/ChaptersPage';
import ChapterSignupPage from './components/ChapterSignupPage';
import CurrentChaptersPage from './components/CurrentChaptersPage';
import DonatePage from './components/DonatePage';
import EducationPage from './components/EducationPage';
import EventsPage from './components/EventsPage';
import LandingPage from './components/LandingPage';
import LeaderSignupPage from './components/LeaderSignupPage';
import SocialHypePage from './components/SocialHypePage';
import SubmitEventPage from './components/SubmitEventPage';
import SupportersPage from './components/SupportersPage';
import TeamPage from './components/TeamPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/about/chapters' component={ChaptersPage}/>
        <Route path='/about/team' component={TeamPage}/>
        <Route path='/about/supporters' component={SupportersPage}/>
        <Route path='/current-chapters' component={CurrentChaptersPage}/>
        <Route path='/resources' component={EducationPage}/>
        <Route path='/events' component={EventsPage}/>
        <Route path='/donate' component={DonatePage}/>
        <Route path='/leader-signup' component={LeaderSignupPage}/>
        <Route path='/chapter-signup' component={ChapterSignupPage}/>
        <Route path='/submit-event' component={SubmitEventPage}/>
        <Route path='/social-hype' component={SocialHypePage}/>

    </Route>
);