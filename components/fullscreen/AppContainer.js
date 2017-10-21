import React from 'react';
import Base from '../AppContainerBase'
import TimeRemaining from './TimeRemaining'
import ModifyTimeButtons from './ModifyTimeButtons'
import StartStopButton from './StartStopButton'
import ResetButton from './ResetButton'

export default class AppContainer extends Base {

    render = () => {

        return (
            <div align="center">

                <TimeRemaining seconds={this.state.secondsLeft}/>

                <ModifyTimeButtons changeTime={this.onTimeChange}/>

                <ResetButton ticking={this.state.ticking}
                             secondsLeft={this.state.secondsLeft}
                             resetTime={this.onTimeReset}
                />

                <StartStopButton ticking={this.state.ticking}
                                 enabled={this.state.secondsLeft > 0}
                                 onClicked={this.onStartButtonClick}
                />
            </div>
        );
    }
}


