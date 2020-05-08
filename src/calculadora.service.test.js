// import React from 'react';
// import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';


describe('Teste do CalculadoraService',()=>{
    const [calcular, concatenarNumero, SOMA, SUBTRACAO,DIVISAO, MULTIPLICACAO] = CalculadoraService();
    it('deve garantir que 1+4 = 5',()=>{
        let soma = calcular(1,4,SOMA);
        expect(soma).toEqual(5);
    });
    it('deve garantir que 1-4 = -3',()=>{
        let subtracao = calcular(1,4,SUBTRACAO);
        expect(subtracao).toEqual(-3);
    });
    it('deve garantir que 2*4 = 8',()=>{
        let subtracao = calcular(2,4,MULTIPLICACAO);
        expect(subtracao).toEqual(8);
    });
    it('deve garantir que 8/4 = 2',()=>{
        let subtracao = calcular(8,4,DIVISAO);
        expect(subtracao).toEqual(2);
    });
});