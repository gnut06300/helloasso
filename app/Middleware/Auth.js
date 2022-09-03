const jwt = require('jsonwebtoken')
const config = require('../api/AuthConfig');
const httpTokenService = require('../api/httpTokenService');


async function getToken() {
    const response = await httpTokenService.post('/oauth2/token', {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: process.env.GRANT_TYPE,
    });
    return response.data.access_token;
}

//refresh token every 30 minutes
setInterval(async () => {
    const token = await getToken();
    httpService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}, 1800000);

exports.isAuth = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

exports.getToken = getToken;

