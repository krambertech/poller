import React, { Component, PropTypes } from 'react';

import TextArea from '../TextArea.jsx';
import TextField from '../TextField.jsx';
import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./PollPage.less');
}

export default class App extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        const  poll = {
            question: 'What is the best movie ever?',
            options: ['1', '2', '3']
        };

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
