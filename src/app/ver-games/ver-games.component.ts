import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';


@Component({
  selector: 'app-ver-games',
  templateUrl: './ver-games.component.html',
  styleUrls: ['./ver-games.component.css']
})
export class VerGamesComponent implements OnInit {

  nomeMandante: string = ''
  nomeVisitante: string = ''
  timeGames: Game[] = []

  constructor(private gs: GameService) { }

  ngOnInit(): void {

  }

  deletarGame(id: number){
    this.gs.deletar(id).subscribe(
      () => alert('removido')
      
    )

  }

  procurarPeloMandante(form: any){
    this.loadDataMandante()
    form.reset()
    this.nomeMandante = ''

  }
  procurarPeloVisitante(form: any){
    this.loadDataVisitante()
    form.reset()
    this.nomeVisitante = ''
  }

  loadDataMandante(){
    this.gs.procurarPeloMandante(this.nomeMandante).subscribe(
      data => this.timeGames = data
    )
  }

  loadDataVisitante(){
    this.gs.procurarPeloVisitante(this.nomeVisitante).subscribe(
      data => this.timeGames = data
    )
  }


}
