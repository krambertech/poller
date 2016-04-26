import express      from 'express';
import cookieParser from 'cookie-parser';

import React                     from 'react';
import ReactDOM                  from 'react-dom/server';
import { Provider }              from 'react-redux';
import { RoutingContext, match } from 'react-router';
import escapeHTML                from 'lodash/string/escape';

import bodyParser  from 'body-parser';

import {
    fetchComponentsData,
    getMetaDataFromState,
    detectLocale
} from './utils';

import routes         from '../shared/routes.jsx';
import configureStore from '../shared/store/configureStore';
import i18n           from '../shared/i18n';

import clientConfig from '../etc/client-config.json';

// Initializе localization
import ruLocaleData from '../public/static/lang/ru.json';
import enLocaleData from '../public/static/lang/en.json';

import api from './api';

const i18nToolsRegistry = {
    ru : new i18n.Tools({ localeData: ruLocaleData, locale: 'ru' }),
    en : new i18n.Tools({ localeData: enLocaleData, locale: 'en' })
};

const app = express();

app.use(bodyParser.json({ limit: 1024 * 1024, verify: (req, res, buf) => {
    try {
        JSON.parse(buf);
    } catch (e) {
        res.send({
            status: 0,
            error: {
                code: 'BROKEN_JSON',
                message: 'Please, verify your json'
            }
        });
    }
} }));

app.use('/api/v1', api);

app.use('/static', express.static('public/static'));

app.use(cookieParser());

app.use((req, res) => {
    const locale = detectLocale(req);
    const store = configureStore();

    const i18nTools = i18nToolsRegistry[locale];

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            res.send(500, error.message);
        } else if (!renderProps) {
            res.send(404, 'Not found');
        } else {
            fetchComponentsData(
                store.dispatch,
                renderProps.components,
                renderProps.params,
                renderProps.location.query
            )
            .then(() => {
                const componentHTML = ReactDOM.renderToString(
                    <Provider store={store}>
                        <i18n.Provider i18n={i18nTools}>
                            <RoutingContext {...renderProps}/>
                        </i18n.Provider>
                    </Provider>
                );

                const initialState = store.getState();

                const metaData = getMetaDataFromState({
                    route  : renderProps.routes[renderProps.routes.length - 1].path,
                    state  : initialState
                });

                return renderHTML({
                    componentHTML,
                    initialState,
                    metaData,
                    config : clientConfig
                });
            })
            .then(html => {
                res.cookie('locale', locale, { maxAge: 900000 });
                res.end(html);
            })
            .catch(err => {
                console.log(err.stack);
                res.end(err.message);
            });
        }
    });
});

function renderHTML({ componentHTML, initialState, metaData, config }) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            <title>${escapeHTML(metaData.title)}</title>

            <meta name="description" content="${escapeHTML(metaData.description)}">
            <meta property="og:title" content="${escapeHTML(metaData.title)}" />
            <meta property="og:site_name" content="${escapeHTML(metaData.siteName)}"/>
            <meta property="og:description" content="${escapeHTML(metaData.description)}" />

            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>

            <link rel="stylesheet" href="${config.staticUrl}/static/build/main.css">

            <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            </script>
        </head>
        <body>
        <div id="react-view">${componentHTML}</div>
          <script type="application/javascript">
            window.__CONFIG__ = ${JSON.stringify(config)};
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>

          <script type="application/javascript" src="${config.staticUrl}/static/build/main.js"></script>
        </body>
        </html>
    `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
