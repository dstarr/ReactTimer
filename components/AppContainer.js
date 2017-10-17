import React from 'react';
import Well from 'react-bootstrap/lib/Well'
import TimeRemaining from './TimeRemaining'
import ModifyTimeButtons from './ModifyTimeButtons'
import StartStopButton from './StartStopButton'
import ResetButton from './ResetButton'

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    onTimeChange = (seconds) => {
        alert("Got it " + seconds)
    };

    componentWillMount = () => {
        this.setState({
            secondsLeft: 0,
            ticking:false
        });
    };

    onStartButtonClick = () => {

    };

    onTimeChange = (seconds) => {


        let sec = this.state.secondsLeft + seconds;

        if(sec < 0)
            sec = 0;

        if(sec > 3600)
            sec=3600;

        this.setState({
            secondsLeft: sec
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


                <ModifyTimeButtons changeTime={this.onTimeChange}/>

                <ResetButton ticking={this.state.ticking}/>

                <StartStopButton ticking={this.state.ticking}
                                 onClicked={this.onStartButtonClick}
                                 enabled={this.state.secondsLeft > 0}/>
            </div>
        );
    }
}

// const outerDiv = {
//     textAlign:'center',
//     align: 'center',
//     width: 550
// };


