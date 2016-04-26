import React, { Component, PropTypes } from 'react';

import ResultsPage from '../../components/pages/ResultsPage.jsx';

export default class ResultsPageContainer extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        return (
            <ResultsPage />
        );
    }
}
