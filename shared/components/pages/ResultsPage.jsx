import React, { Component } from 'react';

import { sprintf } from '../../utils';

import Chart from 'react-chartjs';

import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./ResultsPage.less');
}

const CHART_PIE_COLOR_PALETTE = [
    '#f44336', '#e91e63', '#9c27b0',
    '#673ab7', '#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#009688',
    '#4caf50', '#8bc34a', '#cddc39'
];

export default class App extends Component {
    static contextTypes = { i18n: React.PropTypes.object };

    render() {
        const { poll, onCreatePoll } = this.props;

        const { l, ngettext } = this.context.i18n;

        if (!poll) {
            return <div>{l('Loading...')}</div>;
        }

        const pollData = poll.options.map((option, idx) => ({
            value: poll.results[idx],
            color: CHART_PIE_COLOR_PALETTE[idx],
            label: option
        }));

        return (
            <div className='ResultsPage'>
                <h2 className='ResultsPage__question'>
                    {poll.question}
                </h2>

                <Chart.Pie
                    data={pollData}
                    width='300'
                    height='300'
                />

                <ul className='ResultsPage__options'>
                    {
                        poll.options.map((option, idx) =>
                            <li className='ResultsPage__option' key={idx}>
                                <div className='ResultsPage__option-text'>
                                    <i
                                        style={{ backgroundColor: CHART_PIE_COLOR_PALETTE[idx] }}
                                        className='ResultsPage__option-color'
                                    />
                                    {option}
                                </div>
                                <div className='ResultsPage__option-result'>
                                    {sprintf(
                                        ngettext(
                                            '%d vote',
                                            '%d votes',
                                            poll.results[idx]
                                        ),
                                        poll.results[idx]
                                    )}
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
