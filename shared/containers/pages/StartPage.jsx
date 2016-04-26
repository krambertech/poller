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
        console.log('this.props', this.props);

        return (
            <StartPage
                onPollCreate={this.handleCreatePoll.bind(this)}
            />
        );
    }
}

function mapStateToProps({ }) {
    console.log('mapStateToProps');

    return {
        'gggg': 33333
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
