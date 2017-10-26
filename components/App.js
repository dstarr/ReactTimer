import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import MediaQuery from 'react-responsive';

const Example = () => (
  <div>
    <MediaQuery minDeviceWidth={1224}>
      <AppContainer/>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <h1>You are a tablet or mobile phone</h1>
    </MediaQuery>
    <MediaQuery orientation="portrait">
      <h1>You are portrait</h1>
    </MediaQuery>
  </div>
);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render( <Example/>, node1);
}