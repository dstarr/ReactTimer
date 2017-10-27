import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Base from '../base/ModifyTimeButtonsBase';

export default class ModifyTimeButtons extends Base {

    render = () => {

        return (


            <div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-10)}}>- 10 seconds</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(10)}}>+ 10 seconds</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-30)}}>- 30 seconds</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(30)}}>+ 30 seconds</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-60)}}>- 1 minutes</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(60)}}>+ 1 minutes</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-300)}}>- 5 minutes</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(300)}}>+ 5 minutes</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-600)}}>- 10 minutes</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(600)}}>+ 10 minutes</Button>
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    height: 160,
    width: 400,
    fontSize: 48,
    margin: 10
};