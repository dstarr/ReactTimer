import React from 'react';
import Base from '../base/TimeRemainingBase';

export default class FSTimeRemaining extends Base {

    getStyle = () => {
        return {
            backgroundColor: '#cfcfcf',
            color: '#2865A8',
            fontSize: '1000%',
            fontWeight: 'bold'
        }
    };

    render = () => {

        return (

                <div style={this.getStyle()}>
                    {this.state.minutes}:{this.state.seconds}
                </div>

        );
    }
}