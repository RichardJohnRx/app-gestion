import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.saludar();
  }

  name="Danni";
  
  saludar(){
    alert("Hola"+this.name);
  }

}
