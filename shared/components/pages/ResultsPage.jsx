import React, { Component } from 'react';

import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./ResultsPage.less');
}

export default class App extends Component {
    static contextTypes = { i18n: React.PropTypes.object };

    render() {
        const { poll, onCreatePoll } = this.props;

        const { l } = this.context.i18n;

        if (!poll) {
            return <div>Loading...</div>;
        }

        return (
            <div className='ResultsPage'>
                <h2 className='ResultsPage__question'>
                    {poll.question}
                </h2>
                <ul className='ResultsPage__options'>
                    {
                        poll.options.map((option, idx) =>
                            <li className='ResultsPage__option' key={idx}>
                                <div className='ResultsPage__option-text'>
                                    {option}
                                </div>
                                <div className='ResultsPage__option-result'>
                                    {poll.results[idx]}
                                </div>
                            </li>
                        )
                    }
                </ul>
                <Button onClick={onCreatePoll}>{l('Create poll like this!')}</Button>
            </div>
        );
    }
}
