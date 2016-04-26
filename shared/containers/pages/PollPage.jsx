import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import PollPage from '../../components/pages/PollPage.jsx';

import { loadPoll } from '../../actions/polls';
import { createVote } from '../../actions/votes';

import connectDataFetchers from '../../lib/connectDataFetchers.jsx';

class PollPageContainer extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    handleVote(index) {
        this.props.createVote({
            pollId: this.props.params.id,
            selectedOption: index
        }).then(() =>
            this.props.history.replaceState(null, `/polls/${this.props.params.id}/results`)
        );
    }

    render() {
        const { poll, error } = this.props;

        return (
            <PollPage
                poll={poll}
                error={error}
                onVote={this.handleVote.bind(this)}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPoll: bindActionCreators(loadPoll, dispatch),
        createVote: bindActionCreators(createVote, dispatch)
    };
}

function mapStateToProps({ openedPoll }) {
    return {
        poll: openedPoll.poll,
        isLoading: openedPoll.isLoading,
        error: openedPoll.error
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    connectDataFetchers(PollPageContainer, [ loadPoll ])
);
