import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecleando-card',
  templateUrl: './tecleando-card.component.html',
  styleUrls: ['./tecleando-card.component.scss']
})
export class TecleandoCardComponent implements OnInit {

  public linkPrevious : string;
  public linkNext : string;
  public linkGame : string;
  public title : string;
  public description : string;
  public imgSource : string;

  constructor() {
    this.linkPrevious = "../TTTCard"; 
    this.linkNext = "../PPTCard";
    this.linkGame = "../Tecleando"; 
    this.title = "Tecleando";
    this.description = "<p><b>¡Probá tus reflejos!</b></p><p>Apretá las teclas que aparecen en pantalla cuanto antes y suma puntos para demostrar que sos el más rápido. Pero cuidado, si te equivocas perderás vidas.</p>"; 
    this.imgSource = "./assets/imagenes/Tecleando.png";
  }

  ngOnInit() {
  }

}
