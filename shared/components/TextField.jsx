import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

if (process.env.BROWSER) {
    require('./TextField.less');
}

export default class TextField extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        const { className, ...otherProps } = this.props;

        const classes = cx('TextField', className);

        return (
            <input className={classes} {...otherProps} />
        );
    }
}
