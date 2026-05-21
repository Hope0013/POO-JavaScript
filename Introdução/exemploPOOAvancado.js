class Pessoa {
    #nome;
    #idade;
    #cpf;
    
    constructor(nome, idade, cpf) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }

    getNome() {
        return this.#nome;
    }

    getIdade() {
        return this.#idade;
    }

    getCpf() {
        return this.#cpf;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setIdade(idade) {
        this.#idade = idade;
    }

    exibirInfo(){
        console.log(`\nNome: ${this.#nome}\nIdade: ${this.#idade}\nCPF: ${this.#cpf}`
        );
    }
}

let pessoa1 = new Pessoa ("João", 25, "123.456.789.00");
let pessoa2 = new Pessoa ("Maria", 30, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade(26);
pessoa1.exibirInfo();

class Funcionario extends Pessoa{
    #cargo;
    #salario;

    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade, cpf);
        this.#cargo = cargo;
        this.#salario = salario;
    }

    getCargo(){
        return this.#cargo;
    }

    getSalario(){
        return this.#salario
    }

    setCargo(cargo){
        this.#cargo = cargo;
    }

    setSalario(novoSalario){
        this.#salario = novoSalario;
    }

    exibirInfo(){
        super.exibirInfo();
        console.log(`Cargo: ${this.#cargo}\nSalário: ${this.#salario}`);
    }
}

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3500);

funcionario1.exibirInfo();
funcionario1.setSalario(4000);
funcionario1.exibirInfo();