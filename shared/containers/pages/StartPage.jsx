import React, { Component } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import { createPoll } from '../../actions/polls';

import StartPage from '../../components/pages/StartPage.jsx';

export default class StartPageContainer extends Component {
    handleCreatePoll(pollData) {
        console.log('handleCreatePoll', pollData);
        this.props.createPoll(pollData);
    }

    render() {
        const { isLoading, createdPoll, error } = this.props;

        return (
            <StartPage
                createdPoll={createdPoll}
                isLoading={isLoading}
                error={error}
                onPollCreate={this.handleCreatePoll.bind(this)}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.createPoll.isLoading,
        createdPoll: state.createPoll.createdPoll,
        error: state.createPoll.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createPoll: bindActionCreators(createPoll, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    StartPageContainer
);
