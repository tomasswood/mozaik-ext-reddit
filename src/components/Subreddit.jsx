import React, {Component, PropTypes} from 'react';
import reactMixin from 'react-mixin';
import {ListenerMixin} from 'reflux';
import Mozaik from 'mozaik/browser';

class Subreddit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            subreddit: ''
        };
    }

    getInitialState() {
        return {title: null, subreddit: null};
    }

    getApiRequest() {
        return {
            id: 'reddit.subreddit',
            params: {
                title: this.props.title,
                subreddit: this.props.subreddit
            }
        };
    }

    onApiData(data) {
        console.log(data);
    }

    render() {
        return (
            <div>
                <div className="widget__header">
                    <span className="widget__header__subject">
                        {this.state.title}
                    </span>
                    <i className="fa fa-server"/>
                </div>
                <div className="ybi__data">
                    <div></div>
                </div>
            </div>
        );
    }
}

Subreddit.displayName = 'For Reddit';

Subreddit.propTypes = {
    title: PropTypes.string.isRequired
};

Subreddit.defaultProps = {
    title: 'For Reddit',
    subreddit: ''
};

reactMixin(Subreddit.prototype, ListenerMixin);
reactMixin(Subreddit.prototype, Mozaik.Mixin.ApiConsumer);

export {Subreddit as default};
