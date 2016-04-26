import React     from 'react';
import { Route } from 'react-router';

import App from './containers/App.jsx';

import StartPage from './containers/pages/StartPage.jsx';
import PollPage from './containers/pages/PollPage.jsx';
import ResultsPage from './containers/pages/ResultsPage.jsx';

export default (
    <Route component={App} >
        <Route component={StartPage} path='/' />
        <Route component={PollPage} path='/polls/:id' />
        <Route component={ResultsPage} path='/polls/:id/results' />
    </Route>
);
