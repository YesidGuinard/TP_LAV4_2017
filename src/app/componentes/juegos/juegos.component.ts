import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(300,style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
      
    ])
  ]
})
export class JuegosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
