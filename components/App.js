import React from 'react';
import ReactDOM from 'react-dom';
import FSAppContainer from './fullscreen/FSAppContainer';
import MediaQuery from 'react-responsive';

const Layout = () => (
    <div>
        <MediaQuery minDeviceWidth={1224}>
            <FSAppContainer />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={479} orientation="portrait">
            <h1>You are a tablet or mobile phone in portrait</h1>
        </MediaQuery>
    </div>
);

const node1 = document.getElementById('app');

if (node1) {

    ReactDOM.render( <Layout/>, node1);
}
