import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { AboutComponent } from './components/about/about.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';


const routes: Routes = [
  { path: '', component: GameViewComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
