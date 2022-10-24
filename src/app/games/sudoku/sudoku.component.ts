import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
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

}
