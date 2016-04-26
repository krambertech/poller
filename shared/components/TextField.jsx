import React, { Component } from 'react';
import cx from 'classnames';

if (process.env.BROWSER) {
    require('./TextField.less');
}

export default class TextField extends Component {
    render() {
        const { className, ...otherProps } = this.props;

        const classes = cx('TextField', className);

        return (
            <input className={classes} {...otherProps} />
        );
    }
}
