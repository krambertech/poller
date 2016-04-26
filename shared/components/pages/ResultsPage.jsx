import React, { Component, PropTypes } from 'react';

import TextArea from '../TextArea.jsx';
import TextField from '../TextField.jsx';
import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./ResultsPage.less');
}

export default class App extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        const { poll } = this.props;

        if (!poll) {
            return <div>Loading...</div>;
        }

        console.log(poll);

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
            </div>
        );
    }
}
