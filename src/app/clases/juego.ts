export enum ModoDeJuego
{
    Jugando = 1,
    NoJugando = 2        
}

export enum EstadoJuego
{
    Gano = 1,
    Perdio = 2,
    Nada = 3      
}

export abstract class Juego {
  public jugador: string;
  public ultimoPuntaje: number;
  public vidasRestantes: number;
  public modoDeJuego: ModoDeJuego;
  public segundosTranscurridos: number;
  public minutosTranscurridos: number;
  public estadoJuego : EstadoJuego;
  private intervaloTiempo : NodeJS.Timer;

  constructor(vidasRestantes: number) {
    this.modoDeJuego = ModoDeJuego.NoJugando;
    this.ultimoPuntaje = 0;
    this.vidasRestantes = vidasRestantes;
    this.jugador = "Juan";
    this.minutosTranscurridos = 0;
    this.segundosTranscurridos = 0;
    this.estadoJuego = EstadoJuego.Nada;
  } 

  public ComenzarCronometro(){
    let horaInicio = new Date();
    this.intervaloTiempo = setInterval( () => {
      let horaActual : Date= new Date();
      let diferencia = Math.abs(horaActual.getTime() - horaInicio.getTime());;
      let tiempoTranscurrido = new Date(diferencia);
      this.minutosTranscurridos = tiempoTranscurrido.getMinutes();
      this.segundosTranscurridos = tiempoTranscurrido.getSeconds();
    },1000)
  }

  public FinalizarCronometro(){
    clearInterval(this.intervaloTiempo);
  }

  public GuardarResultado(){

  }
}

