import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agilidad-arimetica-card',
  templateUrl: './agilidad-arimetica-card.component.html',
  styleUrls: ['./agilidad-arimetica-card.component.scss']
})
export class AgilidadArimeticaCardComponent implements OnInit {
  
  public linkPrevious : string;
  public linkNext : string;
  public linkGame : string;
  public title : string;
  public description : string;
  public imgSource : string;

  constructor() {
    this.linkPrevious = "../AENCard"; 
    this.linkNext = "../ACard";
    this.linkGame = "../AgilidadAritmetica"; 
    this.title = "Agilidad Aritmetica";
    this.description = "<p><b>¿Qué tan bueno sos con matemática?</b> Resuelve el problema planteado antes que se acabe el tiempo\
     y demuestra que eres una <b>verdadera calculadora humana.</b></p>"; 
    this.imgSource = "./assets/imagenes/AgilidadAritmetica.png";
  }

  ngOnInit() {
  }

}
