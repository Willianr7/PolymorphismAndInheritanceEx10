export class Animal{
    nome: string;
    idade: number;
    som: string;

    constructor(nome: string, idade: number, som: string) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }
    mostar(){
        console.log(`${this.nome}\n${this.idade}\n${this.som}`)
    }
    correr(){
        console.log("Correndo....")
    }
    subir(){
        console.log("subindo na árvore....")
    }
}