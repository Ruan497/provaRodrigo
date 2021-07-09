import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarGameComponent } from './criar-game/criar-game.component';
import { VerGamesComponent } from './ver-games/ver-games.component';

const routes: Routes = [
  {
    path: 'cad',
    component: CriarGameComponent
  },
  {
    path: 'verGames',
    component: VerGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
