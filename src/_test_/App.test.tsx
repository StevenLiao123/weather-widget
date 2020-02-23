import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const jsdomAlert = window.alert;  // remember the jsdom alert
window.alert = () => {};  // provide an empty implementation for window.alert
it('renders without crashing', () => {
  const div = document.createElement('div');
  //@ts-ignore
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
