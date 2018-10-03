import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama-card',
  templateUrl: './anagrama-card.component.html',
  styleUrls: ['./anagrama-card.component.scss']
})
export class AnagramaCardComponent implements OnInit {

  public linkPrevious : string;
  public linkNext : string;
  public linkGame : string;
  public title : string;
  public description : string;
  public imgSource : string;

  constructor() {
    this.linkPrevious = "../AACard"; 
    this.linkNext = "../TTTCard";
    this.linkGame = "../Anagrama"; 
    this.title = "Anagrama";
    this.description = "<p><b>¡Revolucioná tus palabras!</b></p>\
    <p>Un anagrama es una palabra o frase que resulta de la transposición de letras de otra palabra o frase.</p>\
    <p>El juego consiste en ingresar el anagrama correcto de la palabra que aparece en pantalla. <b>¡Más aciertos, más puntos!</b></p>"; 
    this.imgSource = "./assets/imagenes/anagrama.png";
  }

  ngOnInit() {
  }

}
