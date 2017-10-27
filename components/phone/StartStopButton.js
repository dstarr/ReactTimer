import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Base from '../base/StartStopButtonBase'


export default class StartStopButton extends Base {

    render = () => {

        if (this.props.enabled)
            return (
                <Button style={buttonStyle} onClick={this.props.onClicked}>{this.state.buttonTitle}</Button>
            );

        return (
            <Button style={buttonStyle} disabled>{this.state.buttonTitle}</Button>
        );

    };
}

const buttonStyle = {
    height: 160,
    width: 400,
    fontSize: 48,
    margin: 10
};