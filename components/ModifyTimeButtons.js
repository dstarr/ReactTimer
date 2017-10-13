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


        const leftStyle = {
            textAlign:'left',
            borderColor: 'black',
            borderWidth: 3,
            borderStyle: 'solid',

        };

        const rightStyle = {
            textAlign: 'right',
            borderColor: 'black',
            borderWidth: 3,
            borderStyle: 'solid',
        };

        return (

            <Grid style={gridStyle}>

                <Row>
                    <Col lg={5} style={leftStyle}>
                        <Button bsStyle="primary">Do Something</Button>
                    </Col>
                    <Col lg={2}></Col>
                    <Col lg={5} style={rightStyle}>
                        <Button bsStyle="primary">Do Something</Button>
                    </Col>
                </Row>

            </Grid>

        );
    }
}

export default ModifyTimeButtons;