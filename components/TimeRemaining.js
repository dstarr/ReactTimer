import React from 'react';

export default class TimeRemaining extends React.Component {

    constructor(props) {
        super(props);

    }

    formatNumber = (number) => {

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
    fontSize: 200,
};