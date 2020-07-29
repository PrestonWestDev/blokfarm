import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameOptionsComponent } from './components/game-options/game-options.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    AboutComponent,
    GameViewComponent,
    GameDetailsComponent,
    GameOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
