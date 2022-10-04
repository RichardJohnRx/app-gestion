import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'game', component: GamescreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }