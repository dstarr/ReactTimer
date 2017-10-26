import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

export default class ResetButtonBase extends React.Component {

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

    getButtonStyle = () => {
        return {
            height: 60,
            width: 200,
            fontSize: 24,
            margin: 10
        };
    };

    render = () => {

        if (this.state.enabled) {
            return (
                <Button style={this.getButtonStyle()}
                        onClick={this.props.resetTime}>Reset</Button>
            );
        }

        return (
            <Button style={this.getButtonStyle()} disabled>Reset</Button>
        );
    };
}



ResetButtonBase.PropTypes = {
    ticking: PropTypes.bool.isRequired,
    enabled: PropTypes.bool.isRequired,
    resetButton: PropTypes.func.isRequired
};


