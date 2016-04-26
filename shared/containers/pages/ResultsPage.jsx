import React, { Component } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import ResultsPage from '../../components/pages/ResultsPage.jsx';

import { loadPollResults } from '../../actions/polls';

import connectDataFetchers from '../../lib/connectDataFetchers.jsx';

class ResultsPageContainer extends Component {
    handleCreatePoll() {
        this.props.history.pushState(null, '/');
    }

    render() {
        const { poll, error } = this.props;

        return (
            <ResultsPage
                poll={poll}
                error={error}
                onCreatePoll={this.handleCreatePoll.bind(this)}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPollResults: bindActionCreators(loadPollResults, dispatch)
    };
}

function mapStateToProps({ pollResults }) {
    return {
        poll: pollResults.poll,
        isLoading: pollResults.isLoading,
        error: pollResults.error
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    connectDataFetchers(ResultsPageContainer, [ loadPollResults ])
);
