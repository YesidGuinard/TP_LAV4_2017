import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpModule } from '@angular/http';
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { JugadoresService } from './servicios/jugadores.service'; 
import { ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PiedraPapelTijeraCardComponent } from './componentes/piedra-papel-tijera-card/piedra-papel-tijera-card.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdivinaElNumeroCardComponent } from './componentes/adivina-el-numero-card/adivina-el-numero-card.component';
import { TecleandoCardComponent } from './componentes/tecleando-card/tecleando-card.component';
import { TecleandoComponent } from './componentes/tecleando/tecleando.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire'; 

//SERVICIOS
import { AuthService } from './servicios/auth.service';
import { environment } from '../environments/environment.prod';
import { SpinnerComponent } from './componentes/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadosComponent,
    JuegosComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    PiedraPapelTijeraCardComponent,
    FooterComponent,
    AdivinaElNumeroCardComponent,
    TecleandoCardComponent,
    TecleandoComponent,
    SpinnerComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ 
    AuthService,
    MiHttpService,
    ArchivosJugadoresService,
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
