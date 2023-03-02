"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
/* --- criar carros --- */
let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 2);
let carroC = new Carro('cerato', 4);
/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
let cliente = new Pessoa('João', 'Veloster');
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (cliente.dizerCarroPreferido() === cliente.dizerCarroPreferido()) {
        //comprar o carro
        console.log(`Cliente comprou o carro ${carro.modelo}`);
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
