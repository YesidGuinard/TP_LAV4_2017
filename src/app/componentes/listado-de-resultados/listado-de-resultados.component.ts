
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { Data } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.scss']
})
export class ListadoDeResultadosComponent implements OnInit {
  public resultados : Object;

  constructor(private databaseService : DatabaseService) {
    this.resultados = databaseService.ListarResultados();
    console.log(this.resultados);  
  }

  ngOnInit() {

  }
}
