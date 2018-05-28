import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';
import AboutPage from './components/AboutPage';
import DonatePage from './components/DonatePage';
import EducationPage from './components/EducationPage';
import LandingPage from './components/LandingPage';
import TeamPage from './components/TeamPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/team' component={TeamPage}/>
        <Route path='/education' component={EducationPage}/>
        <Route path='/donate' component={DonatePage}/>

    </Route>
);