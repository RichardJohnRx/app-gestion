import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  public juegofacil: boolean = false;
  public juegointermedio: boolean = false;
  public juegoavanzado: boolean = false;
  public pantallamenu: boolean = true;
  public source = timer(0,1000);
  public segundos:number=0;
  public minutos: number = 0;
  public clock:any;
  public tablero=[];



  public numSelected=null;
  public tiledSelected=null;
  
  

  
  constructor() { }

  ngOnInit(): void {

     this.source.subscribe(_=> {
      this.clock=this.cronometro();
    });
  }

  cambiarPantalla(tipo: string){
    this.juegofacil = false;
    this.juegointermedio = false;
    this.juegoavanzado = false;
    this.pantallamenu = false;
    if(tipo == "menu"){
      this.pantallamenu = true;
    }else if(tipo == "facil"){
      this.juegofacil = true;
    }else if(tipo == "intermedio"){
      this.juegointermedio = true;
    }else if(tipo == "avanzado"){
      this.juegoavanzado = true;
    }
  }

  //funcion para inicializar el cronometro que captura cada segundo 
  cronometro(){
    if(this.segundos == 60){
      this.minutos++;
      this.segundos = 0;
    }
    this.segundos++;
    return "Tiempo: " + this.minutos + ":" + this.segundos;
  }

  mostrarTablero(){
    
  }



}
