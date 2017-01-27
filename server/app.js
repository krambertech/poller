import express from 'express';
import cookieParser from 'cookie-parser';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { RoutingContext, match, Route, Router } from 'react-router';
import escapeHTML from 'lodash/string/escape';

import bodyParser  from 'body-parser';

const app = express();

const About = () => (
    <div>
        <h1>About</h1>
    </div>
);

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const routes = (
    <Router>
        <Route path="about" component={About} />
        <Route path="home" component={Home} />
    </Router>
);

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            res.send(500, error.message);
        } else if (!renderProps) {
            res.send(404, 'Not found');
        } else {
            const componentHTML = ReactDOM.renderToString(
                <RoutingContext {...renderProps} />
            );

            res.end(
                renderHTML({
                    componentHTML,
                })
            );
        }
    });
});

function renderHTML({ componentHTML }) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My page</title>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
        </head>
        <body>
            <div id="react-view">${componentHTML}</div>
        </body>
        </html>
    `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
