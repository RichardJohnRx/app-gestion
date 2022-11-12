import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public arraygames = [{name: "Guess The Number",img: "../assets/guessthenumber.png", genero: "Lógica", path: '/games/guessthenumber'},{name: "Sudoku",img: "../assets/sudokuimg.png", genero: "Lógica", path: '/games/sudoku'},{name: "Diccionario Perdido",img: "../assets/juego3.jpg", genero: "Estrategia"},{name: "Crónicas de Narnia",img: "", genero: "Acción"},{name: "Super Mario Bross",img: "../assets/mario1.jpg", genero: "Aventura"},{name: "Minecraft",img: "../assets/juego2.jpg", genero: "Aventura"},{name: "Diccionario Perdido",img: "../assets/juego7.webp", genero: "Estrategia"},{name: "Crónicas de Narnia",img: "", genero: "Acción"},{name: "Peleas Otakus",img: "../assets/juego6.jpg", genero: "Estrategia"},{name: "Gumball",img: "../assets/juego4.webp", genero: "Estrategia"},{name: "Gumball",img: "../assets/juego5.webp", genero: "Estrategia"},{name: "Super Mario Bross",img: "../assets/mario1.jpg", genero: "Aventura"},{name: "Minecraft",img: "../assets/juego7.webp", genero: "Aventura"},{name: "Diccionario Perdido",img: "../assets/juego3.jpg", genero: "Estrategia"},{name: "Crónicas de Narnia",img: "", genero: "Acción"},{name: "Super Mario Bross",img: "../assets/juego10.jpg", genero: "Aventura"},{name: "Minecraft",img: "../assets/juego2.jpg", genero: "Aventura"},{name: "Diccionario Perdido",img: "../assets/juego3.jpg", genero: "Estrategia"},{name: "Crónicas de Narnia",img: "", genero: "Acción"},{name: "Peleas Otakus",img: "../assets/juego6.jpg", genero: "Estrategia"},{name: "Gumball",img: "../assets/juego4.webp", genero: "Estrategia"},{name: "Gumball",img: "../assets/juego5.webp", genero: "Estrategia"},{name: "Super Mario Bross",img: "../assets/juego10.jpg", genero: "Aventura"},{name: "Minecraft",img: "../assets/juego2.jpg", genero: "Aventura"},{name: "Diccionario Perdido",img: "../assets/juego3.jpg", genero: "Estrategia"},{name: "Crónicas de Narnia",img: "", genero: "Acción"},{name: "Super Mario Bross",img: "../assets/mario1.jpg", genero: "Aventura"},{name: "Minecraft",img: "../assets/juego10.jpg", genero: "Aventura"},{name: "Diccionario Perdido",img: "../assets/juego8.webp", genero: "Estrategia"},{name: "Crónicas de Narnia",img: "", genero: "Acción"},{name: "Peleas Otakus",img: "../assets/juego6.jpg", genero: "Estrategia"},{name: "Gumball",img: "../assets/juego7.webp", genero: "Estrategia"},{name: "Gumball",img: "../assets/juego9.avif", genero: "Estrategia"}]
  public games: Game[] = []
  constructor() { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    this.arraygames.forEach(element => {
      if(element['img'] == "" || element['img'] == null){
        element['img'] = "../assets/coming.jpg";
      }
      this.games.push(element)
    });
  }
}
