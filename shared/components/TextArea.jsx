import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

if (process.env.BROWSER) {
    require('./TextArea.less');
}

export default class TextArea extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        const { className, ...otherProps } = this.props;

        const classes = cx('TextArea', className);

        return (
            <textarea className={classes} {...otherProps} />
        );
    }
}
