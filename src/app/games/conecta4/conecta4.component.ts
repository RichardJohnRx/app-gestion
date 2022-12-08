import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conecta4',
  templateUrl: './conecta4.component.html',
  styleUrls: ['./conecta4.component.css']
})
export class Conecta4Component implements OnInit {
  board:any

  constructor() { }

  ngOnInit(): void {
  }

  easyLevel() {
    //Easy level for 4 in a row
    let easy = []
    for (let i = 0; i < 7; i++) {
      easy.push(Math.floor(Math.random() * 7))
    }
  }

  hardLevel() {
    //Hard level for 4 in a row
    let hard = []
    for (let i = 0; i < 4; i++) {
      hard.push(Math.floor(Math.random() * 4))
    }
  }


  click(){
    //Check if there is a winner
    let winner = false
    let player = 1
    let board = this.board
    let row = 0
    let column = 0
    let diagonal = 0
    let diagonal2 = 0
    //Check rows
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (board[i][j] == player) {
          row++
          if (row == 4) {
            winner = true
          }
        } else {
          row = 0
        }
      }
    }

    //Check columns
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        if (board[j][i] == player) {
          column++
          if (column == 4) {
            winner = true
          }
        } else {
          column = 0
        }
      }
    }

    //Check diagonals

    //Diagonal 1
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] == player) {
          diagonal++
          if (diagonal == 4) {
            winner = true
          }
        } else {
          diagonal = 0
        }
      }
    }

    //Diagonal 2

    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 7; j++) {
        if (board[i][j] == player) {
          diagonal2++
          if (diagonal2 == 4) {
            winner = true
          }
        } else {
          diagonal2 = 0
        }
      }
    }

    if (winner){
      Swal.fire({
        title: 'Ganador!',
        text: 'Has ganado el juego',
        icon: 'success',
        confirmButtonText: 'Continuar',
      })
    } else {
      Swal.fire({
        title: 'Perdedor!',
        text: 'Has perdido el juego',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
    }



  }
}
