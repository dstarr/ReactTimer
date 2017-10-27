import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

export default class StartStopButtonBase extends React.Component {

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

    getButtonStyle = () => {
        return {
            height: 60,
            width: 200,
            fontSize: 24,
            margin: 10
        }
    };

    render = () => {

        if (this.props.enabled)
            return (
                <Button style={this.getButtonStyle()} onClick={this.props.onClicked}>{this.state.buttonTitle}</Button>
            );

        return (
            <Button style={this.getButtonStyle()} disabled>{this.state.buttonTitle}</Button>
        );

    };
}

StartStopButtonBase.PropTypes = {
    ticking: PropTypes.bool.isRequired,
    enabled: PropTypes.bool.isRequired,
    onClicked: PropTypes.func.isRequired
};