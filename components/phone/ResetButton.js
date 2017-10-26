import React from 'react';
import Base from '../base/ResetButtonBase';
import {Button} from 'react-bootstrap';

export default class ResetButton extends Base {

    render = () => {

        if (this.state.enabled) {
            return (
                <Button style={buttonStyle}
                        onClick={this.props.resetTime}>Reset</Button>
            );
        }

        return (
            <Button enabled={String(this.props.ticking)}
                    style={buttonStyle} disabled>Reset</Button>
        );
    }
}

const buttonStyle = {
    height: 160,
    width: 400,
    fontSize: 48,
    margin: 10
};