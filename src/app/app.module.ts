import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GamesModule } from './games/games.module';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GamescreenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GamesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
