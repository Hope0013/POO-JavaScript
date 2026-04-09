class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(porcentagem) {
    if (porcentagem <= 0) {
      console.log("Porcentagem Inválida!");
      return;
    }
    this.salario += (this.salario * porcentagem) / 100;
  }

  exibirInfo() {
    console.log(
      `Nome: ${this.nome}\nCargo: ${this.cargo}\nSalário: R$${this.salario}`,
    );
  }
}

let funcionario1 = new Funcionario("Ana", "Vendedora", 3500);

funcionario1.exibirInfo();
funcionario1.aumentarSalario(20);
funcionario1.exibirInfo();
