import React from 'react';
import PropTypes from 'prop-types';

export default class TimeRemainingBase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minutes: '00',
            seconds: '00'
        };
    }

    formatNumber = (number) => {

        if (number.length > 1)
            return number;

        number = "0" + number;

        return number;

    };

    componentWillReceiveProps = (nextProps) => {

        const seconds = nextProps.seconds;

        let sec = String(seconds % 60);
        let min = String(Math.floor(seconds / 60));

        sec = this.formatNumber(sec);
        min = this.formatNumber(min);

        this.setState({
            seconds: sec,
            minutes: min
        });

    };

    getDivStyle = () => {
        return {
            backgroundColor: '#cfcfcf',
            color: '#2865A8',
            fontSize: '1000%',
            fontWeight: 'bold'
        }
    };

    render = () => {

        return (

            <div style={this.getDivStyle()}>
                {this.state.minutes}:{this.state.seconds}
            </div>

        );
    }
}

TimeRemainingBase.PropTypes = {
    seconds: PropTypes.number.isRequired
};
