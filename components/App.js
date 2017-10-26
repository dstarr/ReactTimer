import React from 'react';
import ReactDOM from 'react-dom';
import DTAppContainer from './desktop/AppContainer';
import MediaQuery from 'react-responsive';

const Layout = () => (
    <div>
        <MediaQuery minDeviceWidth={1224}>
            <DTAppContainer />
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
