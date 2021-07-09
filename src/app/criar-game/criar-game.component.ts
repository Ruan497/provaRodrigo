import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-criar-game',
  templateUrl: './criar-game.component.html',
  styleUrls: ['./criar-game.component.css']
})
export class CriarGameComponent implements OnInit {

  game: Game = {} as Game

  constructor(private gs: GameService) { }

  ngOnInit(): void {
  }


  salvarGame(form: any) {
    this.gs.postar(this.game).subscribe(
      () => {
        form.reset()
        this.game = {} as Game
      }
    )
  }

}
