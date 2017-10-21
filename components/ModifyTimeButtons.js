import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ModifyTimeButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    onButtonClick = (seconds) => {
        this.props.changeTime(seconds);
    };


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
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};

ModifyTimeButtons.PropTypes = {
    changeTime: PropTypes.func.isRequired
};



export default ModifyTimeButtons;