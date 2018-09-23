import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from '../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { PiedraPapelTijeraCardComponent } from '../componentes/piedra-papel-tijera-card/piedra-papel-tijera-card.component';
import { AdivinaElNumeroCardComponent } from '../componentes/adivina-el-numero-card/adivina-el-numero-card.component';
import { TecleandoCardComponent } from '../componentes/tecleando-card/tecleando-card.component';
import { TecleandoComponent } from '../componentes/tecleando/tecleando.component';


// declaro donde quiero que se dirija
const MiRuteo = [
  { path: 'Jugadores', component: JugadoresListadoComponent },
  {
    path: '',
    component: PrincipalComponent,
    children:
      [
        { path: '', redirectTo: 'Juegos', pathMatch: 'full' },
        { path: 'Login', component: LoginComponent },
        {
          path: 'QuienSoy',
          component: QuienSoyComponent
        },
        {
          path: 'Juegos',
          component: JuegosComponent,
          children:
            [{ path: '', redirectTo: 'TCard', pathMatch: 'full' },
            { path: 'TCard', data: { depth: 1 }, component: TecleandoCardComponent },
            { path: 'PPTCard', data: { depth: 2 }, component: PiedraPapelTijeraCardComponent },
            { path: 'AENCard', data: { depth: 3 }, component: AdivinaElNumeroCardComponent },
            { path: 'Tecleando', component: TecleandoComponent },
            { path: 'Adivina', component: AdivinaElNumeroComponent },
            { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
            { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
            { path: 'Agilidad', component: AgilidadAritmeticaComponent }]
        },
      ]
  },
  { path: 'Listado', component: ListadoComponent },
  { path: 'Paises', component: ListadoDePaisesComponent },


  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(MiRuteo, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
