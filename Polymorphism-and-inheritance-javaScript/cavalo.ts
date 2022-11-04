import { Animal } from "./animal";

export class Cavalo extends Animal{
    correr(){
        console.log("Correndo....")
    }
}
var cavalo = new Cavalo("Alazão", 7, "Nherinririii");
cavalo.mostar();
cavalo.correr();