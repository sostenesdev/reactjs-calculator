import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from 'calculadora.service';


describe('Teste do CalculadoraService',()=>{
    const [calcular] = CalculadoraService();
    it('deve garantir que 1+4 = 5',()=>{
        let soma = calcular(1,4, '+');
    });
});