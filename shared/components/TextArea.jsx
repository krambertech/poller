import React, { Component } from 'react';
import cx from 'classnames';

if (process.env.BROWSER) {
    require('./TextArea.less');
}

export default class TextArea extends Component {
    render() {
        const { className, ...otherProps } = this.props;

        const classes = cx('TextArea', className);

        return (
            <textarea className={classes} {...otherProps} />
        );
    }
}
