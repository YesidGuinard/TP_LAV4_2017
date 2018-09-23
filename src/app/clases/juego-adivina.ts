import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super(3); 
      }
     public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
      }
      public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
          return "Falta";
        }
        return "Te pasate";
      }
}
