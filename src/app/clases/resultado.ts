export class Resultado{
    public fecha : Date;
    public juego : string;
    public minutosTranscurridos : number;
    public segundosTranscurridos : number;
    public puntaje : number;
    public nombre : string;

    constructor(fecha : Date, juego : string, minutosTranscurridos : number, segundosTranscurridos : number,
        puntaje : number, nombre : string){
        this.fecha = fecha;
        this.juego = juego;
        this.minutosTranscurridos = minutosTranscurridos;
        this.segundosTranscurridos = segundosTranscurridos;
        this.puntaje = puntaje;
        this.nombre = nombre;
    }
}