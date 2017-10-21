import React from 'react';
import PropTypes from 'prop-types';

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
}

StartStopButtonBase.PropTypes = {
    ticking: PropTypes.bool.isRequired,
    enabled: PropTypes.bool.isRequired,
    onClicked: PropTypes.func.isRequired
};