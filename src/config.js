var convict = require('convict');

var config = convict({
    reddit: {
        userAgent: {
            doc: 'A unique description of what your app does. This argument is not necessary when snoowrap is running in a browser.',
            default: null,
            format: String,
            env: 'REDDIT_API_USER_AGENT'
        },
        clientId: {
            doc: 'The client ID of your app (assigned by reddit).',
            default: null,
            format: String,
            env: 'REDDIT_API_CLIENT_ID'
        },
        clientSecret: {
            doc: 'The client secret of your app (assigned by reddit). If you are using a refresh token with an installed app (which does not have a client secret), pass an empty string as your clientSecret.',
            default: null,
            format: String,
            env: 'REDDIT_API_SECRET_ID'
        },
        refreshToken: {
            doc: 'A refresh token for your app. A script to automatically generate refresh tokens for you can be found here: https://github.com/not-an-aardvark/reddit-oauth-helper',
            default: null,
            format: String,
            env: 'REDDIT_API_REFRESH'
        }
    }
});

module.exports = config;
