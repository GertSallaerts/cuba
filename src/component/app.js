import React from 'react';
import Message from './message';
import './app.css';

export default class App extends React.PureComponent {
    render() {
        const { messages = [] } = this.props;

        return (
            <div className="app">
                <h1>Berichtjes uit Cuba!</h1>
                {messages.map((message, idx) => (
                    <Message key={idx} {...message} />
                ))}
                {messages.length ? null : <h2>Nog geen berichtjes</h2>}
            </div>
        );
    }
}
