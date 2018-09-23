import { Component, OnInit } from '@angular/core';
import { Juego, ModoDeJuego, EstadoJuego } from '../../clases/juego';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-tecleando',
  templateUrl: './tecleando.component.html',
  styleUrls: ['./tecleando.component.scss']
})



export class TecleandoComponent extends Juego implements OnInit {
  public tiempoRestante : number;
  public tecla : string;
  private teclaPresionada : string;
  private intervalo : NodeJS.Timer;
  private readonly tiempoCambio :number = 2;

  constructor()
  { 
    super(3);
    this.tiempoRestante = 0;
    this.tecla = "?";
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.teclaPresionada = event.key;
    console.log("Presionado: " + this.teclaPresionada +". Esperado: " + this.tecla);
    if(this.modoDeJuego == ModoDeJuego.Jugando){
      if(this.tecla == this.teclaPresionada){
        this.ultimoPuntaje += 100;
        this.estadoJuego = EstadoJuego.Gano;
      }
      else{
        this.vidasRestantes--;
        this.estadoJuego = EstadoJuego.Perdio;
      }
    }    
    
    this.tiempoRestante = this.tiempoCambio;
    this.CambiarTecla();
    this.VerificarEstadoDelJuego();
  }
 
  private VerificarEstadoDelJuego(){
    if(this.vidasRestantes <= 0){
      clearInterval(this.intervalo);
      this.modoDeJuego = ModoDeJuego.NoJugando;
      this.tecla = "?";
      this.estadoJuego = EstadoJuego.Nada;
    }
  }

  public Jugar(){
    this.modoDeJuego = ModoDeJuego.Jugando;    
    this.vidasRestantes = 3;
    this.tiempoRestante = this.tiempoCambio;
    this.CambiarTecla();
    this.intervalo = setInterval(() => { 
      if(this.tiempoRestante == 0){
        this.tiempoRestante = this.tiempoCambio;        
        this.CambiarTecla(); 
        this.vidasRestantes--; 
        this.estadoJuego = EstadoJuego.Perdio;
      }else{
        this.tiempoRestante--;
      }
      this.estadoJuego = EstadoJuego.Nada;
      this.VerificarEstadoDelJuego();
    },1000);
  }

  private CambiarTecla(){
      this.tecla = this.GenerarTeclaRandom();
  }

  private GenerarTeclaRandom() :string {
    let possible : string = "abcdefghijklmnopqrstuvwxyz0123456789";
    return possible.charAt(Math.floor(Math.random() * possible.length));
  }
}


