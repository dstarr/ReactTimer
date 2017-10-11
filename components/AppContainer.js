import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import TimeRemaining from './TimeRemaining'

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const jumboStyle = {
            textAlign:'center'
        };

        const colonStyle = {
            fontSize:200,
            color: 'blue',

        };

        return (
            <Jumbotron>
                <h1 bsClass="jumbotron" style={jumboStyle}>
                    <TimeRemaining minutes="0" seconds="0"/>

                </h1>
            </Jumbotron>

        );
    }
}

export default AppContainer;