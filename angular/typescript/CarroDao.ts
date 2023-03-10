import { DaoInterface } from './DaoInterface';
import Carro from './Carro';

export class CarroDao implements DaoInterface {
  nomeTabela: string = 'tb_carro';

  inserir(object: Carro): boolean {
    console.log('lógica insert');
    return true;
  }

  atualizar(object: Carro): boolean {
    console.log('lógica update');
    return true;
  }

  remover(id: number): Carro {
    console.log('lógica delete');
    return new Carro('', 2);
  }

  selecionar(id: number): Carro {
    console.log('lógica select');
    return new Carro('', 2);
  }

  selecionarTodos(): [any] {
    console.log('lógica getAll');
    return [new Carro('', 2)];
  }
}
