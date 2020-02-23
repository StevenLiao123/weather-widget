import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../components/editor';

it('renders without crashing', () => {
  const input = document.createElement('input');
  //@ts-ignore
  ReactDOM.render(<Editor />, input);
  ReactDOM.unmountComponentAtNode(input);
});

// describe('Editor', () => {
//     it('should rendera a tag with className "weather-editor-title"', () => {
//         const testRender = 
//     });
// });


// it('should render ', () => {
//     const button = document.createElement('button');
//     //@ts-ignore
//     ReactDOM.render(<Editor />, button);
//     ReactDOM.unmountComponentAtNode(button);
// });