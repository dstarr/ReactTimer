import React from 'react';
import {Button} from 'react-bootstrap';

export default class ResetButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            enabled: false
        };

    }

    componentWillReceiveProps = (nextProps) => {

        if (nextProps.ticking) {
            this.setState({
                enabled: false
            });
            return;
        }

        if (nextProps.secondsLeft > 0) {
            this.setState({
                enabled: true
            });
            return;
        }

        this.setState({
            enabled: false
        });


    };

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