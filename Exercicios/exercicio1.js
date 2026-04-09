class Produto {
  #nome;
  #preco;
  #estoque;

  constructor(nome, preco, estoque) {
    this.#nome = nome;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  getNome() {
    return this.#nome;
  }

  getPreco() {
    return this.#preco;
  }

  getEstoque() {
    return this.#estoque;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  setPreco(preco) {
    this.#preco = preco;
  }

  vender(quantidade) {
    this.#estoque -= quantidade;
  }

  repor(quantidade) {
    this.#estoque += quantidade;
  }

  exibirInfo() {
    console.log(
      `\nProduto: ${this.#nome}\nPreço: ${this.#preco}\nEstoque: ${this.#estoque}`,
    );
  }
}

let produto1 = new Produto("Mesa", 100, 10)
let produto2 = new Produto("Cadeira", 50, 20);

produto1.exibirInfo();
produto2.exibirInfo();

produto1.vender(5);
produto2.repor(10);

produto1.exibirInfo();
produto2.exibirInfo();