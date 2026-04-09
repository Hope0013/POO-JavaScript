class Veiculo {
  #marca;
  #modelo;
  #ano;

  constructor(marca, modelo, ano) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
  }

  getMarca() {
    return this.#marca;
  }

  getModelo() {
    return this.#modelo;
  }

  getAno() {
    return this.#ano;
  }

  setMarca(marca) {
    this.#marca = marca;
  }

  setModelo(modelo) {
    this.#modelo = modelo;
  }
  
  setAno(ano) {
    this.#ano = ano;
  }

  exibirInfo() {
    console.log(
      `\nMarca: ${this.#marca}\nModelo: ${this.#modelo}\nAno: ${this.#ano}`,
    );
  }
}

let veiculo1 = new Veiculo("Yamaha", "NMAX 160", 2020);
let veiculo2 = new Veiculo("Subaru", "SUV Forester",2021 );

veiculo1.exibirInfo();
veiculo2.exibirInfo();

class Carro extends Veiculo {
  #quantidadePortas;

  constructor(marca, modelo, ano, quantidadePortas) {
    super(marca, modelo, ano);
    this.#quantidadePortas = quantidadePortas;
  }

  getQuantidadePortas() {
    return this.#quantidadePortas;
  }

  setQuantidade(quantidadePortas) {
    this.#quantidadePortas = quantidadePortas;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Quantidade de Portas: ${this.#quantidadePortas}`);
  }
}

let carro1 = new Carro(
  "Volkswagen",
  "Fusca",
  1993,
  2
);

carro1.exibirInfo();

