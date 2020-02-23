import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../components/editor';

it('should has Bu', () => {
  const input = document.createElement('input');
  //@ts-ignore
  ReactDOM.render(<Editor />, input);
  ReactDOM.unmountComponentAtNode(input);
});