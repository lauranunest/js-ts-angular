class Carro {
  private modelo: string;
  private numeroDePortas: number;
  private velocidade: number = 0;

  constructor(modelo: string, numeroDePortas: number) {
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
    this.numeroDePortas = numeroDePortas;
  }

  public acelerar(): void {
    this.velocidade = this.velocidade + 10;
  }

  public parar(): void {
    this.velocidade = 0;
  }

  public velocidadeAtual(): number {
    return this.velocidade;
  }
}

class Concessionaria {
  private endereco: string;
  private listaDeCarros: Array<Carro>;

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros;
  }
}

class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro!: Carro;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  public dizerNome(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro;
  }

  public dizerCarroQueTem(): Carro {
    return this.carro;
  }
}

/* --- criar carros --- */
let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 2);
let carroC = new Carro('cerato', 4);

/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

/* --- exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros());

/* --- comprar o carro --- */
let cliente = new Pessoa('João', 'Veloster');

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (cliente.dizerCarroPreferido() === cliente.dizerCarroPreferido()) {
    //comprar o carro
    console.log(`Cliente comprou o carro ${carro.modelo}`);
    cliente.comprarCarro(carro);
  }
});

console.log(cliente.dizerCarroQueTem());
