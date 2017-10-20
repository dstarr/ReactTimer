import React from 'react';
import ReactDOM from 'react-dom';
import FSAppContainer from './fullscreen/AppContainer';


const node1 = document.getElementById('app');

if (node1) {


    ReactDOM.render( <FSAppContainer/>, node1);
}