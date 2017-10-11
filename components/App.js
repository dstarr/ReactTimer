import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render( <Hello/>, node1);
}


