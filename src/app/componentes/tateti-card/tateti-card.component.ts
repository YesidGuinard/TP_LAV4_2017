import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti-card',
  templateUrl: './tateti-card.component.html',
  styleUrls: ['./tateti-card.component.scss']
})
export class TatetiCardComponent implements OnInit {

  public linkPrevious : string;
  public linkNext : string;
  public linkGame : string;
  public title : string;
  public description : string;
  public imgSource : string;

  constructor() {
    this.linkPrevious = "../ACard"; 
    this.linkNext = "../TCard";
    this.linkGame = "../TaTeTi"; 
    this.title = "TaTeTi";
    this.description = "<p><b>¡Lucha de Titanes!</b></p>\
    <p>Los círculos contra las equis. Vos contra la computadora. </p>\
    <p>Cada vez que logres ganar el clásico juego sumarás puntos, pero no será fácil. <b>¡Demostrá tu habilidad!</b></p>"; 
    this.imgSource = "./assets/imagenes/TaTeTi.png";
  }

  ngOnInit() {
  }

}
