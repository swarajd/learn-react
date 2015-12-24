import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

ReactDOM.render(
  //you can add properties to the component, in this case both are being overriden
  <App />,
  document.getElementById('app')
);

persist(alt, storage, 'app');