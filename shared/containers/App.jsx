import React, { Component, PropTypes } from 'react';

import { initialize, navigate } from '../utils/googleAnalytics';

if (process.env.BROWSER) {
    require('../assets/normalize.css');
    require('../assets/typography.less');
}

export default class App extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    componentDidMount() {
        initialize();
        navigate({
            page  : this.props.location.pathname,
            title : this.props.routes[this.props.routes.length - 1].path
        });
    }

    componentWillReceiveProps(nextProps) {
        const isPathnameChanged = this.props.location.pathname !== nextProps.location.pathname;

        if (isPathnameChanged) {
            navigate({
                page  : nextProps.location.pathname,
                title : nextProps.routes[nextProps.routes.length - 1].path
            });
        }
    }

    render() {
        return (
            <div className='App'>
                {this.props.children}
            </div>
        );
    }
}
