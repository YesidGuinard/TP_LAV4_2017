import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ModoDeJuego } from '../../clases/juego';

@Component({
  selector: 'app-tablero-juegos',
  templateUrl: './tablero-juegos.component.html',
  styleUrls: ['./tablero-juegos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableroJuegosComponent implements OnInit {

  @Input() ultimoPuntaje : number;
  @Input() tiempoRestante : number;
  @Input() descripcionDerecha : string;
  @Input() descripcionIzquierda : string;
  @Input() vidasRestantes : number;
  @Input() minutosTranscurridos : number;
  @Input() segundosTranscurridos : number;
  @Input() jugador : string;
  @Input() modoDeJuego : ModoDeJuego;
  @Output() public jugarClicked = new EventEmitter();
  @Output() public resultadosClicked = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

  JugarClicked(){
    this.jugarClicked.emit();
  }

  ResultadosClicked(){
    this.resultadosClicked.emit();
  }

}
