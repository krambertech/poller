import geoip from 'geoip-lite';

export default function detectLocale(req) {
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    const country = (geo && geo.country);

    return {
        RU: 'ru'
    }[country] || 'en';
}
