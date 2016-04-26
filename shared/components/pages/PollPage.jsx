import React, { Component, PropTypes } from 'react';

import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./PollPage.less');
}

export default class PollPage extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    handleVote(idx) {
        const { onVote } = this.props;

        if (onVote) {
            onVote(idx);
        }
    }

    render() {
        const { poll } = this.props;

        if (!poll) {
            return <div>Loading...</div>;
        }

        return (
            <div className='PollPage'>
                <h2 className='PollPage__question'>
                    {poll.question}
                </h2>
                <ul className='PollPage__options'>
                    {
                        poll.options.map((option, idx) =>
                            <li key={idx} className='PollPage__option'>
                                <input
                                    type='radio'
                                    name='PollPage'
                                    id={`PollPage__${idx}`}
                                    value={idx}
                                    onChange={this.handleVote.bind(this, idx)}
                                />
                                <label htmlFor={`PollPage__${idx}`}>
                                    {option}
                                </label>

                                <div className='check'>
                                    <div className='inside' />
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
