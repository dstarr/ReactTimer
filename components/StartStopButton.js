import React from 'react';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class StartStopButton extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount = () => {

        let title = "Start";

        if(this.props.ticking)
            title = "Pause";


        this.setState({
            buttonTitle: title
        });
    };

    render = () => {

        if(this.props.enabled)
            return (
                <Button style={buttonStyle} enabled>{this.state.buttonTitle}</Button>
            );

        return (
            <Button style={buttonStyle} disabled>{this.state.buttonTitle}</Button>
        );


    }
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
    onClick: PropTypes.func.isRequired
};