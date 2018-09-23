import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public esperandoRespuesta: boolean;
  public correo: string;
  public pass: string;
  public nombre: string;
  public mensajeError: string;
  public error: boolean;
  public cuentaCreada: boolean;

  constructor(
    public authService: AuthService, private location: Location) {
    this.esperandoRespuesta = false;
    this.cuentaCreada = false;
    this.error = false;
  }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.location.back();
      }
    })
  }

  Limpiar(){
    this.cuentaCreada = false;
    this.error = false;
    this.correo = "";
    this.pass = "";
    this.nombre = "";
  }

  OnSubmitAddUser() {
    this.error = false;
    this.cuentaCreada = false;
    this.esperandoRespuesta = true;
    this.authService.registeruser(this.correo, this.pass)
      .then((res) => {
        this.cuentaCreada = true;
        this.authService.updateProfile(this.nombre,null)
        .then( (res) => {
          console.log("Nombre guardado");
          console.log(res);
        })
        .catch((err) => {
          console.log("Error al guardar el nombre");
          console.log(err);
        })

        console.log(res);
      })
      .catch((err) => {
        this.error = true;
        this.mensajeError = err.message;
        console.log(err);
      })
      .then(() => {
        this.esperandoRespuesta = false;
      });
  }

  Login(){    
    this.error = false;
    this.esperandoRespuesta = true;
    this.authService.login(this.correo,this.pass)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      this.error = true;
      this.mensajeError = err.message;
      console.log(err);
    })
    .then(() => {
      this.esperandoRespuesta = false;
    });
  }
}
