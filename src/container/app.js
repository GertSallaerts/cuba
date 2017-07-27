import get from 'lodash/get';
import map from 'lodash/map';
import { parseString as parseRSS } from 'xml2js';
import React from 'react';
import App from '../component/app';

const CUTOFF_DATE = 1501176682671; // 27/07 19:32

export default class AppContainer extends React.PureComponent {

    state = {}

    componentWillMount() {
        fetch('https://zapier.com/engine/rss/1256999/cuba')
            .then(res => res.ok ? res.text() : '')
            .then(content => new Promise((resolve, reject) => {
                parseRSS(content, function (err, result) {
                    resolve(result || {});
                });
            }))
            .then(rss => get(rss, 'rss.channel[0].item'))
            .then(messages => map(messages, m => ({
                from: get(m, 'dc:creator[0]._'),
                message: get(m, 'description', []).join(' '),
                date: new Date(get(m, 'pubDate[0]')),
                image: get(m, 'enclosure[0].$.url'),
            })))
            .then(messages => messages.filter(m => m.date > CUTOFF_DATE))
            .then(messages => this.setState({ messages }));
    }

    render() {
        const { messages } = this.state;

        if (!messages)
            return <p>loading</p>;

        return <App {...{ messages }} />;
    }
}
