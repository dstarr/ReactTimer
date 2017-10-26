import React from 'react';
import TimeRemaining from './TimeRemainingBase';
import ResetButton from './ResetButtonBase';
import StartStopButton from './StartStopButtonBase';
import ModifyTimeButtons from './ModifyTimeButtonsBase';


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
            this.startTimer();
            return;
        }

        this.stopTimer();

    };

    tickDown = () => {
        this.onTimeChange(-1);
    };

    startTimer = () => {
        this.timer = setInterval(this.tickDown, 1000);

        this.setState({
            ticking: true
        });

    };

    stopTimer = () => {

        if(this.state.ticking) {
            clearInterval(this.timer);

            this.setState({
                ticking: false
            });
        }

    };

    onTimeChange = (seconds) => {

        let sec = this.state.secondsLeft + seconds;

        if (sec < 0) {
            this.stopTimer();
            sec = 0;
        }

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

                <TimeRemaining seconds={this.state.secondsLeft}/>

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


