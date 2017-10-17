import React from 'react';
import { Button } from 'react-bootstrap';

export default class ResetButton extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount = () => {

        let enabled = false;

        if(this.props.ticking)
            enabled = true;

        this.setState({
            buttonEnabled: enabled
        });
    };

    render = () => {

        if(this.props.ticking) {
           return (
                <Button enabled={String(this.props.ticking)} style={buttonStyle}>Reset</Button>
            );
        }

        return (
            <Button enabled={String(this.props.ticking)} style={buttonStyle} disabled>Reset</Button>
        );
    }
}

const buttonStyle = {
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};

