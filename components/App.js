import React from 'react';
import ReactDOM from 'react-dom';
import FSAppContainer from './fullscreen/FSAppContainer';
import MediaQuery from 'react-responsive';

const Layout = () => (
    <div>
        <MediaQuery minDeviceWidth={1224}>
            <FSAppContainer />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224} orientation="landscape">
            <h1>You are a tablet or mobile phone in landscape</h1>
        </MediaQuery>
        <MediaQuery orientation="portrait">
            <h1>You are portrait</h1>
        </MediaQuery>
    </div>
);

const node1 = document.getElementById('app');

if (node1) {

    ReactDOM.render( <Layout/>, node1);
}
