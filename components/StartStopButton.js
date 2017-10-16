import React from 'react';
import { Button } from 'react-bootstrap'

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

        return (
            <Button style={buttonStyle}>{this.state.buttonTitle}</Button>
        );

    }
}

const buttonStyle = {
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};

