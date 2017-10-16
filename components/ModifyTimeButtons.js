import React from 'react';
import {Button} from 'react-bootstrap'

class ModifyTimeButtons extends React.Component {

    constructor(props) {
        super(props);
    }


    render = () => {

        return (



            <table style={gridStyle}>
                <tr>
                    <td align="left">
                        <Button style={buttonStyle} bsStyle="primary">- 5 minutes</Button>
                    </td>
                    <td align="right">
                        <Button style={buttonStyle} bsStyle="primary">+ 5 minutes</Button>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <Button style={buttonStyle} bsStyle="primary">- 1 minutes</Button>
                    </td>
                    <td align="right">
                        <Button style={buttonStyle} bsStyle="primary">+ 1 minutes</Button>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <Button style={buttonStyle} bsStyle="primary">- 30 seconds</Button>
                    </td>
                    <td align="right">
                        <Button style={buttonStyle} bsStyle="primary">+ 30 seconds</Button>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <Button style={buttonStyle} bsStyle="primary">- 10 seconds</Button>
                    </td>
                    <td align="right">
                        <Button style={buttonStyle} bsStyle="primary">+ 10 seconds</Button>
                    </td>
                </tr>
            </table>


        );
    }
}

const gridStyle = {
    align: 'center',
    borderColor: 'grey',
    borderWidth: 3,
    borderStyle: 'solid',

    width: 550
};

const buttonStyle = {
    height: 60,
    width: 200,
    fontSize: 24,
    margin: 10
};

export default ModifyTimeButtons;