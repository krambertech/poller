import React, { Component, PropTypes } from 'react';

import PollPage from '../../components/pages/PollPage.jsx';

export default class PollPageContainer extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        return (
            <PollPage />
        );
    }
}
