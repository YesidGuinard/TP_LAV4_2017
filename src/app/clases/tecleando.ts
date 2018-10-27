import { Juego, ModoDeJuego, EstadoJuego, Juegos } from './juego';
import { DatabaseService } from "../servicios/database.service";

export class Tecleando extends Juego {
    public tiempoRestante: number;
    public tecla: string;
    private intervalo: NodeJS.Timer;
    private readonly tiempoCambio: number = 2;

    constructor(databaseService: DatabaseService) {
        super(3, Juegos.Tecleando, databaseService);
        this.tiempoRestante = 0;
        this.tecla = "?";
    }

    public PresionoTecla(teclaPresionada: string) {
        console.log("Presionado: " + teclaPresionada + ". Esperado: " + this.tecla);
        if (this.modoDeJuego == ModoDeJuego.Jugando) {
            if (this.tecla == teclaPresionada) {
                this.ultimoPuntaje += 100;
                this.estadoJuego = EstadoJuego.Gano;
            }
            else {
                this.vidasRestantes--;
                this.estadoJuego = EstadoJuego.Perdio;
            }


            this.tiempoRestante = this.tiempoCambio;
            this.CambiarTecla();
        }
        this.VerificarEstadoDelJuego();
    }

    private VerificarEstadoDelJuego() {
        if (this.modoDeJuego == ModoDeJuego.Jugando && this.vidasRestantes <= 0) {
            this.modoDeJuego = ModoDeJuego.NoJugando;
            this.FinalizarCronometro();
            clearInterval(this.intervalo);
            this.tecla = "?";
            this.estadoJuego = EstadoJuego.Nada;
            this.GuardarResultado();
        }
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        this.vidasRestantes = 3;
        this.ultimoPuntaje = 0;
        this.tiempoRestante = this.tiempoCambio;
        this.CambiarTecla();
        this.intervalo = setInterval(() => {
            if (this.tiempoRestante == 0) {
                this.tiempoRestante = this.tiempoCambio;
                this.CambiarTecla();
                this.vidasRestantes--;
                this.estadoJuego = EstadoJuego.Perdio;
            } else {
                this.tiempoRestante--;
            }
            this.estadoJuego = EstadoJuego.Nada;
            this.VerificarEstadoDelJuego();
        }, 1000);
    }

    private CambiarTecla() {
        this.tecla = this.GenerarTeclaRandom();
    }

    public GenerarTeclaRandom(): string {
        let possible: string = "abcdefghijklmnopqrstuvwxyz0123456789";
        return possible.charAt(Math.floor(Math.random() * possible.length));
    }
}