import request from 'superagent-bluebird-promise';
import config from './config';
import chalk from 'chalk';
import snoowrap from 'snoowrap';

/**
 * @param {Mozaik} mozaik
 */
const client = function(mozaik) {

    mozaik.loadApiConfig(config);

    const buildApiRequest = (subreddit) => {
        const r = new snoowrap({
            userAgent: config.get('reddit.userAgent'),
            clientId: config.get('reddit.clientId'),
            clientSecret: config.get('reddit.clientSecret'),
            refreshToken: config.get('reddit.refreshToken')
        });

        return r.getSubreddit(subreddit).getHot();
    }

    const apiCalls = {
        subreddit({subreddit}) {
            return buildApiRequest(subreddit).then(res => res.body);
        }
    };
    return apiCalls;
};

export {client as default};
