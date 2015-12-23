import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
  //you can add properties to the component, in this case both are being overriden
  <App />,
  document.getElementById('app')
);