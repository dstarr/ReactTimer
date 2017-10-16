import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render( <AppContainer/>, node1);
}


