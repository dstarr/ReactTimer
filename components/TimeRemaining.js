import React from 'react';

class TimeRemaining extends React.Component {

    constructor(props) {
        super(props);

        //this.formatNumber = this.formatNumber.bind(this);
    }

    formatNumber = (number) => {

        if(number.length > 1)
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

        const style = {
            color: 'blue',
            fontSize: 200,
        };

        return (

            <div style={style}>
                {this.state.minutes}:{this.state.seconds}
            </div>
        );
    }
}

export default TimeRemaining;