import React, { Component } from 'react';

import TextArea from '../TextArea.jsx';
import TextField from '../TextField.jsx';
import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./StartPage.less');
}

export default class App extends Component {
    static contextTypes = { i18n: React.PropTypes.object };

    state = {
        question: '',
        options: ['', '']
    };

    handleOptionChange(idx, e) {
        const options = this.state.options.map((option, i) =>
            i === idx ? e.target.value : option
        );

        this.setState({
            options
        });
    }

    handleQuestionChange(e) {
        this.setState({
            question: e.target.value
        });
    }

    handlePollCreate(e) {
        const { onPollCreate } = this.props;

        if (onPollCreate) {
            onPollCreate({
                question: this.state.question,
                options: this.state.options
            });
        }

        e.preventDefault();
    }

    render() {
        const { question, options } = this.state;

        const { createdPoll } = this.props;

        const { l } = this.context.i18n;

        return (
            <div className='StartPage'>
                <div className='StartPage__hero'>
                    <img src='/static/images/sunglasses.svg' className='StartPage__logo' />
                    <h1 className='StartPage__heading'>{l('Poller')}</h1>
                    <h4 className='StartPage__description'>{l('Polls made easy')}</h4>
                </div>
                <div className='StartPage__create-poll'>
                    {
                        createdPoll
                        ?
                            <div className='StartPage__poll-created'>
                                <TextField
                                    className='StartPage__input'
                                    value={createdPoll.link}
                                />
                                <p>{l('Share this link with friends')}</p>
                            </div>
                        :
                            <form className='StartPage__create-poll-form'>
                                <TextArea
                                    className='StartPage__input'
                                    rows={4}
                                    value={question}
                                    placeholder={l('What movie to watch on weekend?')}
                                    onChange={this.handleQuestionChange.bind(this)}
                                />
                                {
                                    options.map((option, idx) =>
                                        <TextField
                                            key={idx}
                                            className='StartPage__input'
                                            placeholder={`Option ${idx + 1}`}
                                            onChange={this.handleOptionChange.bind(this, idx)}
                                            value={option}
                                        />
                                    )
                                }

                                <Button onClick={this.handlePollCreate.bind(this)}>Start!</Button>
                            </form>
                    }
                </div>
            </div>
        );
    }
}
