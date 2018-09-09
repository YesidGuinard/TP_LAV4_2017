import { Juego } from '../clases/juego'

export class JuegoAgilidad extends Juego{
    numeroIngresado = 0;

    public verificar() {
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
}
