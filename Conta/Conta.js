//Classe Abstrata: nao pode ser instanciada, só funciona pra ser herdada!!!!!!!
import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(saldoInicial, agencia, cliente) {
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
        if (this.constructor == Conta) {
            throw new Error("Você não deveia instanciar um objeto do tipo conta, pois é uma classe abstrata");
            //Lancamos um erro pra PARAR a execucao e o desenvovledor ver que nao pode instanciar a conta

        }
    }

    set cliente(novoValor) { //cliente sem _ pq metodos acessores sao publicos
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        //Método abstratato, foi feito pra ser sobrescrito, ou seja, cada tipo de conta teve ter seu metodo sacar pra colocar seu tipo de taxa especifico.
        throw new Error("Método sacar da conta é abstrato");
    }

    _sacar(valor, taxa) { //Sobrescreve ignorando o metodo sacar de conta pq tem um metodo sacar diferente aqui (_)
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0; //se n retorna zero 
    }

    depositar(valor) {
        if (valor <= 0) {
            return; //Só para parar de executar a função.
        }
        this._saldo += valor;
    }

    transferir(valor, outraConta) {
        const valorSacado = this.sacar(valor);
        outraConta.depositar(valorSacado);

    }
}