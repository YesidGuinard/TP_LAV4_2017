import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Resultado } from '../clases/resultado';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afDatabase : AngularFireDatabase) { }

  public GuardarResultados(name : string, puntaje : number, minutosTranscurridos : number, segundosTranscurridos : number, juego : string) {
    console.log("Guardando resultado: " + name + " " +  puntaje + " " + minutosTranscurridos + " : " + segundosTranscurridos + " " + juego);
    this.afDatabase.database.ref('resultados/').push({
      nombre: name,
      puntaje: puntaje,
      minutosTranscurridos: minutosTranscurridos,
      segundosTranscurridos: segundosTranscurridos,
      juego: juego,
      fecha: new Date().toDateString()
    })
  }

  public ListarResultados() : Resultado[]{
    var listaResultados : Resultado[] = []; 
    this.afDatabase.database.ref('resultados/').once('value', (data) => {
      data.forEach( (child) => {
        let fecha : Date = new Date(child.val().fecha);
        let nombre : string = child.val().nombre;
        let puntaje : number = child.val().puntaje;
        let minutosTranscurridos : number = child.val().minutosTranscurridos;
        let segundosTranscurridos : number = child.val().segundosTranscurridos;
        let juego: string = child.val().juego;

        let resultado : Resultado = new Resultado(fecha, juego, minutosTranscurridos, segundosTranscurridos, puntaje, nombre);
        listaResultados.push(resultado);
      });
    });
    return listaResultados;
  }
}
