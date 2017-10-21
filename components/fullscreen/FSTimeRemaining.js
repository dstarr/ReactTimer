import React from 'react';
import Base from '../base/TimeRemainingBase';

export default class FSTimeRemaining extends Base {

    render = () => {

        return (

                <div style={countDownNumberStyle}>
                    {this.state.minutes}:{this.state.seconds}
                </div>

        );
    }
}

const countDownNumberStyle = {
    backgroundColor: '#e0e0e0',
    color: '#2865A8',
    fontSize: '175',
    fontWeight: 'bold'
};