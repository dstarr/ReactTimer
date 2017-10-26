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
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};