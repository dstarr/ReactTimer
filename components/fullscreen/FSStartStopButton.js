import React from 'react';
import {Button} from 'react-bootstrap'
import Base from '../base/StartStopButtonBase'


export default class FSStartStopButton extends Base {

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
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};