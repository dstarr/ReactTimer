import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'

class ModifyTimeButtons extends React.Component {

    constructor(props) {
        super(props);
    }


    render = () => {

        const gridStyle = {
            align: 'center',
            borderColor: 'red',
            borderWidth: 3,
            borderStyle: 'solid',
            width: 500
        };

        const colStyle = {
            align: 'right'
        };


        return (

            <div align="center">
                <Button style={colStyle} bsStyle="primary" block>Do Something</Button>
                <Button style={colStyle} bsStyle="primary" block>Do Something</Button>
            </div>

        );
    }
}

export default ModifyTimeButtons;