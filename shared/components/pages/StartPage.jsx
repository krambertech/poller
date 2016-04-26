import React, { Component, PropTypes } from 'react';

import TextArea from '../TextArea.jsx';
import TextField from '../TextField.jsx';
import Button from '../Button.jsx';

if (process.env.BROWSER) {
    require('./StartPage.less');
}

export default class App extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

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

    handleQuestionChange(idx, e) {
        this.setState({
            question: e.target.value
        });
    }

    handlePollCreate() {
        console.log('handlePollCreate VVVV', this);

        const { onPollCreate } = this.props;

        if (onPollCreate) {
            onPollCreate({
                question: this.state.question,
                options: this.state.options
            });
        }
    }

    render() {
        const { question, options } = this.state;

        return (
            <div className='StartPage'>
                <div className='StartPage__hero'>
                    <img src='/static/images/sunglasses.svg' className='StartPage__logo' />
                    <h1 className='StartPage__heading'>Poller</h1>
                    <h4 className='StartPage__description'>Polls made easy</h4>
                </div>
                <div className='StartPage__create-poll'>
                    <form className='StartPage__create-poll-form'>
                        <TextArea
                            className='StartPage__input'
                            rows={4}
                            value={question}
                        />
                        {
                            options.map((option, idx) =>
                                <TextField
                                    className='StartPage__input'
                                    onChange={this.handleOptionChange.bind(this, idx)}
                                    value={option}
                                />
                            )
                        }

                        <Button onClick={this.handlePollCreate.bind(this)}>Start!</Button>
                    </form>
                </div>
            </div>
        );
    }
}
