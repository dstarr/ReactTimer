import React from 'react';
import PropTypes from 'prop-types';

export default class ModifyTimeButtonsBase extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    onButtonClick = (seconds) => {
        this.props.changeTime(seconds);
    };
}

ModifyTimeButtonsBase.PropTypes = {
    changeTime: PropTypes.func.isRequired
};

