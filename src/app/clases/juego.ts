import { Jugador } from './jugador';

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
  public tiempoTranscurrido: number;
  public estadoJuego : EstadoJuego;

  constructor(vidasRestantes: number) {
    this.modoDeJuego = ModoDeJuego.NoJugando;
    this.ultimoPuntaje = 0;
    this.vidasRestantes = vidasRestantes;
    this.jugador = "Juan";
    this.tiempoTranscurrido = 0;
    this.estadoJuego = EstadoJuego.Nada;
  } 
}

