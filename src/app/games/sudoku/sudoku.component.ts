import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SudokuService } from 'src/app/services/sudoku.service';
import { Sudoku } from 'src/app/games/sudoku/sudoku.model';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
})
export class SudokuComponent implements OnInit {
  public isJuegoSelected: boolean = false
  public juegofacil: boolean = false;
  public juegointermedio: boolean = false;
  public juegoavanzado: boolean = false;
  public pantallamenu: boolean = true;
  public source = timer(0, 1000);
  public segundos: number = 0;
  public minutos: number = 0;
  public clock: any;
  public tablero = [];
  public dificultad = ""

  public numSelected = null;
  public tiledSelected = null;

  public currentTablero: Sudoku = {
    id: 0,
    solved: [],
    unsolved: []
  };

  public tableroResuelto: any[] = []

  public tableroView: any[] = []

  constructor(private _sudokuService: SudokuService) {}

  ngOnInit(): void {
    this.source.subscribe((_) => {
      this.clock = this.cronometro();
    });


  }

  cambiarPantalla(tipo: string) {

    this.juegofacil = false;
    this.juegointermedio = false;
    this.juegoavanzado = false;
    this.isJuegoSelected = false
    this.pantallamenu = false;
    if (tipo == 'menu') {
      this.dificultad = ""
      this.pantallamenu = true;
      this.isJuegoSelected = false
    } else {
      this.dificultad = tipo
      this.isJuegoSelected = true
    this.getTablero(tipo);

    }

  }

  //funcion para inicializar el cronometro que captura cada segundo
  cronometro() {
    if (this.segundos == 60) {
      this.minutos++;
      this.segundos = 0;
    }
    this.segundos++;
    return 'Tiempo: ' + this.minutos + ':' + this.segundos;
  }

  getTablero(dificultad: string) {
    console.log(dificultad)
    let tablero = this._sudokuService.getTablero(dificultad);

    console.log("Que pedo con el tablero", tablero)

    tablero ? (this.currentTablero = tablero) : null;


    for (let i = 0; i < tablero!.solved.length; i++) {
      //matriz de 9x9
      this.tableroResuelto[i] = new Array(9);
      for (let j = 0; j < tablero!.solved[i].length; j++) {
        this.tableroResuelto[i][j] = tablero!.solved[i][j];
      }
      
    }

    for (let i = 0; i < tablero!.unsolved.length; i++) {
      this.tableroView[i] = new Array(9)
      for (let j = 0; j < tablero!.unsolved[i].length; j++) {

        this.tableroView[i][j] = tablero!.unsolved[i][j];
      }

    }

    console.log(this.tableroResuelto)
    console.log(this.tableroView)




    //leer archivo tableros.json
  }

  setValue(i: number,j: number, e: any){
    console.log("oiasoidb",i,j,e)


     let promises = []

      promises.push(new Promise((resolve,reject) => {
        this.tableroView[i][j] = e.target.value
        resolve(true)
      })
      )

      Promise.all(promises).then((res) => {
        this.isWinner()
      })

  }

  printValue(){
    console.log("Hola perra",this.tableroView)
  }

  compareTableros(){
    let tableroResuelto = this.tableroResuelto
    let tableroView = this.tableroView

    for(let i = 0; i < tableroResuelto.length; i++){
      for(let j = 0; j < tableroResuelto[i].length; j++){
        if(tableroResuelto[i][j] != tableroView[i][j]){
          return false
        }
      }
    }

    return true
  }


  isWinner(){

    if(this.compareTableros()){
      
      alert("Ganaste")
    } else {
      console.log("No ganaste, hubo un cambio perra")
    }
  }
}
