import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina-el-numero-card',
  templateUrl: './adivina-el-numero-card.component.html',
  styleUrls: ['./adivina-el-numero-card.component.scss']
})
export class AdivinaElNumeroCardComponent implements OnInit {
  
  public linkPrevious : string;
  public linkNext : string;
  public linkGame : string;
  public title : string;
  public description : string;
  public imgSource : string;

  constructor() {
    this.linkPrevious = "../PPTCard"; 
    this.linkNext = "../AACard";
    this.linkGame = "../AdivinaElNumero"; 
    this.title = "Adivina el Numero";
    this.description = "<p><b>Tu suerte está en juego.</b> Sigue las pistas y llega al resultado correcto. <b>¿ACEPTÁS EL DESAFÍO?</b></p>\
    <p>Deberás adivinar un número de dos dígitos elegido por nuestra inteligencia artificial.</p>"; 
    this.imgSource = "./assets/imagenes/AdivinaElNumero.png";
  }

  ngOnInit() {
  }

}
