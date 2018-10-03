import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera-card',
  templateUrl: './piedra-papel-tijera-card.component.html',
  styleUrls: ['./piedra-papel-tijera-card.component.scss']
})
export class PiedraPapelTijeraCardComponent implements OnInit {

  public linkPrevious : string;
  public linkNext : string;
  public linkGame : string;
  public title : string;
  public description : string;
  public imgSource : string;

  constructor() {
    this.linkPrevious = "../TCard"; 
    this.linkNext = "../AENCard";
    this.linkGame = "../PiedraPapelTijeras"; 
    this.title = "Piedra, Papel o Tijeras";
    this.description = "<p><b>Un juego milenario</b>, jugado originalmente por los señores de la guerra del periodo Han en China. </p>\
    <p>La piedra que vence a la tijera rompiéndola, la tijera que vence al papel cortándolo y el papel que vence a\
      la piedra envolviéndola.</p>"; 
    this.imgSource = "./assets/imagenes/piedra-papel-tijeras.png";
  }


  ngOnInit() {
  }

}
