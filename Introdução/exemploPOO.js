// Estudo de POO em JavaScript
// Diferença entre Procedural e POO

// Procedural
let produto1 = {
    nome: "Impressora",
    preco: 1000,
    marca: "Epson",
    disponivel: true,
    desconto: function(){
        return this.preco * 0.1
    }
} // Coleção -> Conjunto de Informações

let produto2 = {
    nome: "Mouse",
    preco: 100,
    marca: "Elgin",
    disponivel: false,
    desconto: function(){
        return this.preco *0.2;
    }
}

console.log(`
    Produto: ${produto1.nome},
    Preço: ${produto1.preco},
    Marca: ${produto1.marca},
    Disponível: ${produto1.disponivel ? "Sim" : "Não"},
    Desconto: ${produto1.disponivel ? produto1.desconto(): ""}]
    `);

// Criação de um OBJ com uma classe (POO)

class Produto{
    nome;
    preco;
    marca;
    disponivel;

    constructor(nome, preco, marca, disponibilidade){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.disponivel = disponibilidade;
    }

    desconto(){
        return this.preco * 0.1
    }

    toString(){
        return `Produto: ${this.nome},
                Preço: ${this.preco},
                Marca: ${this.marca},
                Disponível: ${this.disponivel ? "Sim" : "Não"},
                Desconto: ${this.disponivel ? this.desconto() : ""}`
    }
}

// Declarando os OBJs

let p1 = new Produto("HeadSet", 200, "Dragon", true);
let p2 = new Produto("Microfone", 600, "Razer", false);

console.log(p1.toString());
console.log(p2.toString());