export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf; 
    }
    //Constructor é uma função especial que recebe os Atributos que a classe precisa para criar um objeto ou seja inicializar os obejetos.
    constructor(nome, cpf) {
        this.nome =  nome;
        this._cpf = cpf; 
    }

}