class ContaBancaria {
    #titular;
    #saldo;

    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = saldo;
    }

    getTitular() {
        return this.#titular;
    }

    getSaldo() {
        return this.#saldo;
    }


    setTitular(titular) {
        this.#titular = titular;
    }

    setSaldo(saldo) {
        this.#saldo = saldo;
    }

    depositar(valor) {
        this.#saldo += valor
        console.log(`\n${this.#titular} depositou ${valor}`);
    }

    sacar(valor) {
        if (this.#saldo >= valor){
            this.#saldo -= valor
            console.log(`\n${this.#titular} sacou ${valor}`);
        }else{
            console.log(`\n${this.#titular} está com saldo insuficiente para sacar ${valor}!`)
        }
    
    }

    exibirSaldo() {
        console.log(
        `\nTitular da Conta: ${this.#titular}\nSaldo da Conta: ${this.#saldo}`,
        );
    }

}

let conta1 = new ContaBancaria("Ana", 100);
let conta2 = new ContaBancaria("Bárbara", 2000);

conta1.exibirSaldo();
conta2.exibirSaldo();

conta1.depositar(1000);
conta2.sacar(2500);

conta1.exibirSaldo();
conta2.exibirSaldo();
