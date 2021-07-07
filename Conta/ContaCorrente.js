import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta  {
    static numeroDeContas = 0; // Static é o numero de contas total para classe conta corrente, nao se refere a conta de antonio e juliane, mas é a soma deles.

    constructor(cliente, agencia){
        super(0, cliente,agencia); // Faz uma referencia a classe mae, chamando o construtor da classe que estamos referenciando(mae)
        ContaCorrente.numeroDeContas += 1; //pq é o numero da conta corrente como um todo e nao da conta especifica. 

    }

    sacar(valor){ //Sobrescreve ignorando o metodo sacar de conta pq tem um metodo sacar diferente aqui.
        let taxa = 1.1; 
        return  this._sacar(valor, taxa);

    }

}  