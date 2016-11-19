import React, { Component } from 'react';
import { imageSync } from 'qr-image';

export default class QRCode extends Component {
    static defaultProps = {
        size: 150
    };

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }

    render() {
        const { size, value } = this.props;
        const svgBuffer = imageSync(value, { type: 'svg' });
        const dataURI = `data:image/svg+xml;utf8,${svgBuffer.toString('base64')}`;

        return (
            <img
                height={size}
                width={size}
                src={dataURI}
            />
        );
    }
}
