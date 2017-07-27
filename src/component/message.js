import React from 'react';
import { FormattedRelative } from 'react-intl';

import './message.css';

const authors = {
    'Gert': {
        image: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-1/c60.35.357.357/s320x320/13062204_10154119558892296_351287409870471459_n.jpg?oh=856b15236a9fc1ddf71b81ed6d175981&oe=59FE2B73',
        className: 'left',
    },
    'Bianca': {
        image: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-1/c0.106.320.320/p320x320/18835766_10213238883876837_8930393242948651309_n.jpg?oh=dabe2c95e1aa142a5f70bfcc0635e196&oe=5A36CFAF',
        className: 'right',
    },
};
const defaultAuthor = 'Gert';

export default class Message extends React.PureComponent {
    render() {
        const { from, message, date, image } = this.props;
        const author = authors[from] || authors[defaultAuthor];

        return (
            <div className={`message ${author.className}`}>
                <div className="content">
                    { image ? (
                        <div>
                            <img alt={message} className="img" src={image} />
                            <p className="caption">{message}</p>
                        </div>
                    ) : (
                        <span>{message}</span>
                    ) }
                </div>
                <div className="date">
                    <FormattedRelative value={date} />
                </div>
                <div className="authorcontainer">
                    <div className="author" style={{
                        backgroundImage: `url(${author.image})`
                    }} />
                </div>
            </div>
        );
    }
}
