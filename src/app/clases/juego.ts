import { Jugador } from './jugador';

export enum ModoDeJuego
{
    Jugando = 1,
    NoJugando = 2        
}

export abstract class Juego {
  public jugador: Jugador;
  public ultimoPuntaje: number;
  public vidasRestantes: number;
  public modoDeJuego: ModoDeJuego;

  constructor(vidasRestantes: number) {
    this.modoDeJuego = ModoDeJuego.NoJugando;
    this.ultimoPuntaje = 0;
    this.vidasRestantes = vidasRestantes;
    this.jugador = new Jugador();
  } 

  public retornarAyuda() {    
    return "NO hay Ayuda definida";
  }
}

