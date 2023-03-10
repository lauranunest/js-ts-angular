import { DaoInterface } from './DaoInterface';
import Veiculo from './Veiculo';

export class VeiculoDao implements DaoInterface {
  nomeTabela: string = 'tb_veiculo';

  inserir(object: Veiculo): boolean {
    console.log('lógica insert');
    return true;
  }

  atualizar(object: Veiculo): boolean {
    console.log('lógica update');
    return true;
  }

  remover(id: number): Veiculo {
    console.log('lógica delete');
    return new Veiculo();
  }

  selecionar(id: number): Veiculo {
    console.log('lógica select');
    return new Veiculo();
  }

  selecionarTodos(): [any] {
    console.log('lógica getAll');
    return [new Veiculo()];
  }
}
