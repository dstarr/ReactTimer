import React from 'react';
import {Button} from 'react-bootstrap';
import Base from '../base/ModifyTimeButtonsBase';

export default class FSModifyTimeButtons extends Base {

    render = () => {

        return (


            <div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-600)}}>- 10 minutes</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(600)}}>+ 10 minutes</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-300)}}>- 5 minutes</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(300)}}>+ 5 minutes</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-60)}}>- 1 minutes</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(60)}}>+ 1 minutes</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-30)}}>- 30 seconds</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(30)}}>+ 30 seconds</Button>
                </div>
                <div>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(-10)}}>- 10 seconds</Button>
                    <Button style={buttonStyle} bsStyle="primary" onClick={() => {this.onButtonClick(10)}}>+ 10 seconds</Button>
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};