import React from 'react';

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
            clearInterval(this.timer);

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

}

