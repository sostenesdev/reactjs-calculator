import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';
import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('Calculadora', ()=>{
  test('deve renderizar o componente calculadora', () => {
    const  div  = document.createElement('div');
    ReactDOM.render(<Calculadora />,div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Deve limpar o campo de numeros',()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });
  test('Deve somar 2.5 e 3 e obter 5.5',()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  });
  test('Deve multiplicar 2 e 3 e obter 6',()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  });

  test('Deve dividir 6 e 3 e obter 2',()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  });

  test('Deve subtrair 2 e 3 e obter 6',()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('-1');
  });


});