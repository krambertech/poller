import Promise     from 'bluebird';
import geoip       from 'geoip-lite';
import strformat   from 'strformat';

import clientConfig            from '../etc/client-config.json';
import { getSupportedLocales } from '../shared/utils';

export function fetchComponentsData(dispatch, components, params, query) {
    const promises = components.map(current => {
        const component = current.WrappedComponent ? current.WrappedComponent : current;

        return component.fetchData
            ? component.fetchData(dispatch, params, query)
            : null;
    });

    return Promise.all(promises);
}

export function getMetaDataFromState({ route, state }) {
    if (route === '/polls/:id') {
        const { question } = state.openedPoll.question;

        return {
            title       : question,
            siteName    : "Poller",
            description : 'Vote for this question!'
        };
    }

    return {
        title       : 'Poller - polls made easy',
        siteName    : 'Poller',
        image       : 'http://www.cwfa.org/wp-content/uploads/2015/04/poll-box.png',
        description : 'Create an amazing poll!'
    };
}

export function makeRedirectUrl({ originalUrl }) {
    const UIWallPath = `${clientConfig.embedOrigin}/quizwall`;

    return `${UIWallPath}${originalUrl}`;
}

export function detectLocale(req) {
    // Take locale passed by user
    const passedLocale = (req.query.locale || req.cookies.locale || '').toLowerCase();

    if (getSupportedLocales().indexOf(passedLocale) >= 0) {
        return passedLocale;
    }

    // Detect locale by ip
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    const country = (geo && geo.country);

    return {
        RU: 'ru'
    }[country] || 'en';
}
