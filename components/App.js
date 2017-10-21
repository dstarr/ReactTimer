import React from 'react';
import ReactDOM from 'react-dom';
import FSAppContainer from './fullscreen/AppContainer';
import MediaQuery from 'react-responsive';

const Example = () => (
    <div>
        <MediaQuery minDeviceWidth={1224}>

            <FSAppContainer />
            <MediaQuery maxWidth={1224}>
                <div>You are sized like a tablet or mobile phone though</div>
            </MediaQuery>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224} orientation="portrait">
            <h1>You are a tablet or mobile phone in portrait</h1>
        </MediaQuery>
        <MediaQuery orientation="portrait">
            <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery orientation="landscape">
            <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery minResolution="2dppx">
            <div>You are retina</div>
        </MediaQuery>
    </div>
);

const node1 = document.getElementById('app');

if (node1) {

    ReactDOM.render( <Example/>, node1);
}
