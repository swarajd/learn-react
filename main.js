import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  //you can add properties to the component, in this case both are being overriden
  <App txt="this is the props value" cat={6}/>,
  document.getElementById('app')
);