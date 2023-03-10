"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoDao = void 0;
const Veiculo_1 = __importDefault(require("./Veiculo"));
class VeiculoDao {
    constructor() {
        this.nomeTabela = 'tb_veiculo';
    }
    inserir(object) {
        console.log('lógica insert');
        return true;
    }
    atualizar(object) {
        console.log('lógica update');
        return true;
    }
    remover(id) {
        console.log('lógica delete');
        return new Veiculo_1.default();
    }
    selecionar(id) {
        console.log('lógica select');
        return new Veiculo_1.default();
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [new Veiculo_1.default()];
    }
}
exports.VeiculoDao = VeiculoDao;
