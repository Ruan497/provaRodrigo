import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://calm-anchorage-20290.herokuapp.com/api/v1/games'

  postar(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game)
  }
  procurarPeloMandante(nome: string): Observable<Game[]>{
    return this.http.get<Game[]>(this.apiUrl + '?mandante=' + nome)
  }

  procurarPeloVisitante(nome: string): Observable<Game[]>{
    return this.http.get<Game[]>(this.apiUrl + '?visitante=' + nome)
  }

  deletar(id: number): Observable<Game>{
    return this.http.delete<Game>(this.apiUrl + '/' + id)
  }

}
