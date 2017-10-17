import React from 'react';
import PropTypes from 'prop-types';

export default class TimeRemaining extends React.Component {

    constructor(props) {
        super(props);

    }

    formatNumber = (number) => {

        //alert("L: " + number);

        if (number.length > 1)
            return number;

        number = "0" + number;

        return number;

    };

    componentWillMount = () => {

        const min = this.formatNumber(this.props.minutes);
        const sec = this.formatNumber(this.props.seconds);

        this.setState({
            minutes: min,
            seconds: sec
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
    color: 'blue',
    fontSize: '500%',
};

TimeRemaining.PropTypes = {
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired
};
