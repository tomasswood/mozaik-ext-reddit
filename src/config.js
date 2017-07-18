var convict = require('convict');

var config = convict({
    reddit: {
        userAgent: {
            format: String,
            env: 'REDDIT_API_USER_AGENT'
        },
        clientId: {
            format: String,
            env: 'REDDIT_API_CLIENT_ID'
        },
        clientSecret: {
            format: String,
            env: 'REDDIT_API_SECRET_ID'
        },
        refreshToken: {
            format: String,
            env: 'REDDIT_API_REFRESH'
        }
    }
});

module.exports = config;
