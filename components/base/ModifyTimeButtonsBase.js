import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

export default class ModifyTimeButtonsBase extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    onButtonClick = (seconds) => {
        this.props.changeTime(seconds);
    };

    getButtonStyle = () => {
        return {
            height: 60,
            width: 200,
            fontSize: 24,
            margin: 10
        };
    };

    render = () => {

        return (


            <div>
                <div>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(-600)}}>- 10 minutes</Button>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(600)}}>+ 10 minutes</Button>
                </div>
                <div>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(-300)}}>- 5 minutes</Button>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(300)}}>+ 5 minutes</Button>
                </div>
                <div>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(-60)}}>- 1 minutes</Button>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(60)}}>+ 1 minutes</Button>
                </div>
                <div>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(-30)}}>- 30 seconds</Button>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(30)}}>+ 30 seconds</Button>
                </div>
                <div>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(-10)}}>- 10 seconds</Button>
                    <Button style={this.getButtonStyle()} bsStyle="primary" onClick={() => {this.onButtonClick(10)}}>+ 10 seconds</Button>
                </div>
            </div>
        );
    }
}

ModifyTimeButtonsBase.PropTypes = {
    changeTime: PropTypes.func.isRequired
};

