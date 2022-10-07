import { Component, OnInit } from '@angular/core';
import {GamesService} from "../services/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gameTitle = "Guess the Number";
  gameInfo = "Guess the number between 1 and 100. You have 10 guesses. Good luck!";

  constructor(private _gService: GamesService) { }

  ngOnInit(): void {
    this.getInfoWURL();
  }

  getInfoWURL(){
    let url = window.location.href;
    let urlArray = url.split('/');
    let gameURL = urlArray[urlArray.length - 1];
    console.log(gameURL);
    this._gService.getInfoWURL(gameURL).subscribe( (info: any) => {
      this.gameTitle = info.name;
      this.gameInfo = info.info ? info.info : "No info available";
    })


  }

}
