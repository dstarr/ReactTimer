import React from 'react';
import PropTypes from 'prop-types';

export default class TimeRemaining extends React.Component {

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
        let min = String(Math.floor(seconds/60));

        sec = this.formatNumber(sec);
        min = this.formatNumber(min);

        this.setState({
            seconds: sec,
            minutes: min
        });

    };

    render = () => {

        return (
            <div style={countDownNumberStyle}>
                {this.state.minutes}:{this.state.seconds}
            </div>
        );
    }
}

const countDownNumberStyle = {
    color: 'green',
    fontSize: '500%',
};

TimeRemaining.PropTypes = {
    seconds: PropTypes.number.isRequired
};
