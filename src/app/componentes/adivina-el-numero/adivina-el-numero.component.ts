
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { DatabaseService } from '../../servicios/database.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.scss']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  public juego: JuegoAdivina;
 
  constructor(public authService: AuthService,private router: Router, public databaseService : DatabaseService) { 
    this.juego = new JuegoAdivina(databaseService);
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

  // verificar()
  // {
  //   this.contador++;
  //   this.ocultarVerificar=true;
  //   console.info("numero Secreto:");  
  //   if (this.ocultarVerificar){
      
  //     this.enviarJuego.emit(this.juego);
  //     this.MostarMensaje("Sos un Genio!!!",true);
  //     this.juego.numeroSecreto=0;

  //   }else{

  //     let mensaje:string;
  //     switch (this.contador) {
  //       case 1:
  //         mensaje="No, intento fallido, animo";
  //         break;
  //         case 2:
  //         mensaje="No,Te estaras Acercando???";
  //         break;
  //         case 3:
  //         mensaje="No es, Yo crei que la tercera era la vencida.";
  //         break;
  //         case 4:
  //         mensaje="No era el  "+this.juego.numeroIngresado;
  //         break;
  //         case 5:
  //         mensaje=" intentos y nada.";
  //         break;
  //         case 6:
  //         mensaje="Afortunado en el amor";
  //         break;
      
  //       default:
  //           mensaje="Ya le erraste "+ this.contador+" veces";
  //         break;
  //     }
  //     this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.juego.retornarAyuda());
     

  //   }
  //   console.info("numero Secreto:");  
  // }  

  // MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
  //   this.Mensajes=mensaje;    
  //   var x = document.getElementById("snackbar");
  //   if(ganador)
  //     {
  //       x.className = "show Ganador";
  //     }else{
  //       x.className = "show Perdedor";
  //     }
  //   var modelo=this;
  //   setTimeout(function(){ 
  //     x.className = x.className.replace("show", "");
  //     modelo.ocultarVerificar=false;
  //    }, 3000);
  //   console.info("objeto",x);
  
  //  }  
}
