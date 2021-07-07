import {  Cliente } from "./Cliente.js";
import {  SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";

 
const cliente1 = new Cliente("Juliane" , 111222333);
const contaPoupanca = new ContaPoupanca(50, 1001, cliente1);

const contaCorrentJuliane = new ContaCorrente(10, 1001, cliente1);  
//Esse formato de instanciamento foi possivel devido o construtor, se nao seria contaCorreteAntonio.Agencia = 1002;


const diretor = new Diretor("Rodrigo", 10000, 87398732879437);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("AntonioGerente", 7000, 87676786876);
gerente.cadastrarSenha("123");
const estaLogado = SistemaAutenticacao.login(gerente, "123");


console.log(estaLogado); 