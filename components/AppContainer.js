import React from 'react';
import Well from 'react-bootstrap/lib/Well'
import TimeRemaining from './TimeRemaining'
import ModifyTimeButtons from './ModifyTimeButtons'
import StartStopButton from './StartStopButton'

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <div align="center">
                <Well>
                    <h1 bsSize="large">
                        <TimeRemaining minutes="0" seconds="0"/>
                    </h1>
                </Well>


                <ModifyTimeButtons />

                <StartStopButton ticking={false}/>
            </div>

        );
    }
}


