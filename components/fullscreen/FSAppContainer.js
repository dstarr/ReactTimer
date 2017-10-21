import React from 'react';
import Base from '../base/AppContainerBase'
import FSTimeRemaining from './FSTimeRemaining'
import FSModifyTimeButtons from './FSModifyTimeButtons'
import FSStartStopButton from './FSStartStopButton'
import FSResetButton from './FSResetButton'

export default class FSAppContainer extends Base {

    render = () => {

        return (
            <div align="center">

                <FSTimeRemaining seconds={this.state.secondsLeft}/>

                <FSResetButton ticking={this.state.ticking}
                               secondsLeft={this.state.secondsLeft}
                               resetTime={this.onTimeReset}
                />

                <FSStartStopButton ticking={this.state.ticking}
                                   enabled={this.state.secondsLeft > 0}
                                   onClicked={this.onStartButtonClick}
                />

                <FSModifyTimeButtons changeTime={this.onTimeChange}/>


            </div>
        );
    }
}


