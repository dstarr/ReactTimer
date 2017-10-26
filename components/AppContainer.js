import React from 'react';
import Well from 'react-bootstrap/lib/Well'
import TimeRemaining from './TimeRemaining'
import ModifyTimeButtons from './ModifyTimeButtons'
import StartStopButton from './StartStopButton'
import ResetButton from './ResetButton'

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            secondsLeft: 0,
            ticking: false
        };
    }

    onStartButtonClick = () => {

        if(!this.state.ticking) {
            this.timer = setInterval(this.tickDown, 1000);

            this.setState({
                ticking: true
            });

            return;
        }

        if(this.state.ticking) {
            clearInterval(this.timer)

            this.setState({
                ticking: false
            });
        }

    };

    tickDown = () => {
        this.onTimeChange(-1);
    };

    onTimeChange = (seconds) => {

        let sec = this.state.secondsLeft + seconds;

        if (sec < 0)
            sec = 0;

        if (sec > 3600)
            sec = 3600;

        this.setState({
            secondsLeft: sec
        });
    };

    onTimeReset = () => {
        this.setState({
            secondsLeft: 0
        });
    };

    render = () => {

        return (
            <div align="center">
                <Well>
                    <h1>
                        <TimeRemaining seconds={this.state.secondsLeft}/>
                    </h1>
                </Well>
                <ResetButton ticking={this.state.ticking}
                             secondsLeft={this.state.secondsLeft}
                             resetTime={this.onTimeReset}
                />

                <StartStopButton ticking={this.state.ticking}
                                 enabled={this.state.secondsLeft > 0}
                                 onClicked={this.onStartButtonClick}
                />

                <ModifyTimeButtons changeTime={this.onTimeChange}/>
            </div>
        );
    }
}


