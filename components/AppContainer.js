import React from 'react';
import Well from 'react-bootstrap/lib/Well'
import TimeRemaining from './TimeRemaining'
import ModifyTimeButtons from './ModifyTimeButtons'

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const jumboStyle = {
            textAlign: 'center'
        };

        const colonStyle = {
            fontSize: 200,
            color: 'blue',

        };

        return (
            <div>
                <Well>
                    <h1 bsClass="jumbotron" style={jumboStyle}>
                        <TimeRemaining minutes="0" seconds="0"/>
                    </h1>
                </Well>

                <ModifyTimeButtons />
            </div>

        );
    }
}

export default AppContainer;