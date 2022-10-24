import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GuessthenumberComponent } from './games/guessthenumber/guessthenumber.component';
import { SudokuComponent } from './games/sudoku/sudoku.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'games', component: GamesComponent,
    children: [
      { path: 'guessthenumber', component: GuessthenumberComponent},
      { path: 'sudoku', component: SudokuComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
