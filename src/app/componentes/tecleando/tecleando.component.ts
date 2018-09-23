import { Component, OnInit } from '@angular/core';
import { Juego, ModoDeJuego, EstadoJuego } from '../../clases/juego';
import { HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Tecleando } from  '../../clases/tecleando';

@Component({
  selector: 'app-tecleando',
  templateUrl: './tecleando.component.html',
  styleUrls: ['./tecleando.component.scss']
})

export class TecleandoComponent implements OnInit {
  public juego : Tecleando;

  constructor(public authService: AuthService,private router: Router)
  { 
    this.juego = new Tecleando();
  }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(!auth){
        this.router.navigate(['/Login'])
      }
      else{
        this.juego.jugador = auth.displayName;
      }
    })
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.juego.PresionoTecla(event.key);    
  }
 
  

  
}


