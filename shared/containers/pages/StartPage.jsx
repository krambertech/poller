import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import { createPoll } from '../../actions/polls';

import StartPage from '../../components/pages/StartPage.jsx';

export default class StartPageContainer extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

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

function mapStateToProps({ createPoll }) {
    return {
        isLoading: createPoll.isLoading,
        createdPoll: createPoll.createdPoll,
        error: createPoll.error
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
