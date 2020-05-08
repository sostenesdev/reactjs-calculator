import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import Calculadora from './calculadora';

test('renders calculator', () => {
  const  div  = document.createElement('div');
  ReactDOM.render(<Calculadora />,div);
  ReactDOM.unmountComponentAtNode(div);
});
