import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { GamesComponent } from './games.component';
import { GuessthenumberComponent } from './guessthenumber/guessthenumber.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { Conecta4Component } from './conecta4/conecta4.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    GuessthenumberComponent,
    GamesComponent,
    SudokuComponent,
    Conecta4Component,
    AhorcadoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class GamesModule { }
