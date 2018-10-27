import { Juego, Juegos, ModoDeJuego } from '../clases/juego'
import { DatabaseService } from '../servicios/database.service';

export class JuegoAdivina extends Juego{
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor(databaseService : DatabaseService) {
      super(10,Juegos.AdivinaElNumero,databaseService);
    }

    public Jugar() {
      this.modoDeJuego = ModoDeJuego.Jugando;
      this.ComenzarCronometro();
      this.vidasRestantes = 50;
      this.ultimoPuntaje = 0;
      this.generarNumeroSecreto();
    }

    private generarNumeroSecreto() {
      this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
      console.info('numero Secreto:' + this.numeroSecreto);
    }

    public PresionoTecla(teclaPresionada: string) {
      console.log("Presionado: " + teclaPresionada + ". Esperado: " + this.tecla);
      if (this.modoDeJuego == ModoDeJuego.Jugando) {
          if (this.tecla == teclaPresionada) {
              this.ultimoPuntaje += 100;
              this.estadoJuego = EstadoJuego.Gano;
          }
          else {
              this.vidasRestantes--;
              this.estadoJuego = EstadoJuego.Perdio;
          }


          this.tiempoRestante = this.tiempoCambio;
          this.CambiarTecla();
      }
      this.VerificarEstadoDelJuego();
  }

  public Verificar() {
      if (this.modoDeJuego == ModoDeJuego.Jugando && this.vidasRestantes <= 0) {
          this.modoDeJuego = ModoDeJuego.NoJugando;
          this.FinalizarCronometro();
          clearInterval(this.intervalo);
          this.tecla = "?";
          this.estadoJuego = EstadoJuego.Nada;
          
      }

      if(this.vidasRestantes <= 0){
        this.finDelJuego();
      }
  }

  private finDelJuego(){
    this.GuardarResultado();
    this.modoDeJuego = ModoDeJuego.NoJugando;
  }
}
