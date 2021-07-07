export class Cliente {
    //nome; Pode apagar isso por causa do construtor, já declara lá. Especifico do js
   // _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) { // O construtor vai surgir pq vc vai atribuir o cpf uma vez e nunca vai querer alterá-lo
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
}