import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

if (process.env.BROWSER) {
    require('./Button.less');
}

export default class Button extends Component {
    static propTypes = {
        location : PropTypes.object,
        routes   : PropTypes.array,
        children : PropTypes.object,
        history  : PropTypes.object
    };

    render() {
        const { className, ...otherProps } = this.props;

        const classes = cx('Button', className);

        return (
            <button className='Button' {...otherProps}>
                {this.props.children}
            </button>
        );
    }
}
