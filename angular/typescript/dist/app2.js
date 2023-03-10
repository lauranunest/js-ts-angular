"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = require("./Pessoa");
/* --- criar carros --- */
let carroA = new Carro_1.default('dodge journey', 4);
let carroB = new Carro_1.default('veloster', 3);
let carroC = new Carro_1.default('cerato', 4);
/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
let cliente = new Pessoa_1.Pessoa('João', 'Veloster');
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
