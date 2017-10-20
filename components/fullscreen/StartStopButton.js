import React from 'react';
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class StartStopButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonTitle: 'Start'
        }
    }

    componentWillReceiveProps = (nextProps) => {

        let title = "Start";

        if (nextProps.ticking)
            title = "Pause";

        this.setState({
            buttonTitle: title
        });
    };

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

StartStopButton.PropTypes = {
    ticking: PropTypes.bool.isRequired,
    enabled: PropTypes.bool.isRequired,
    onClicked: PropTypes.func.isRequired
};