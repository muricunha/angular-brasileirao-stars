import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(){
    return [
      {id: 1, nome: 'Cássio', description: 'não tem o que reclamar, é craque'},
      {id: 2, nome: 'Carlos Miguel', description: 'bom goleiro'},
      {id: 3, nome: 'M.Donelli', description: 'goleirão nutricionista, nunca esquece do frango.'},
      {id: 4, nome: 'Caetano', description: 'tem boa saída de bola, toda a vez que ele sai, o time melhora'},
      {id: 5, nome: 'Lucas Veríssimo', description: 'jogador difícil de encontrar, infelizmente achamos'},
      {id: 6, nome: 'Fagner', description: 'jogador influencer, tem influenciado muito nas derrotas'},
      {id: 7, nome: 'Rafael Ramos', description: 'esse é jogador bom, bom pra ser emprestado pra outro clube'},
      {id: 8, nome: 'Matheus Bidu', description: 'jogador estilo soldado, a gente sabe que vai, mas nunca volta'},
      {id: 9, nome: 'Matías Rojas', description: 'esse é ousadia e alegria, ousadia de ir pro jogo e alegria da torcida adversária.'},
      {id: 10, nome: 'Maycon', description: 'jogador honesto, quando o time rouba a bola, ele devolve'},
      {id: 11, nome: 'Ruan Oliveira', description: 'não importa a formação, esse está sempre no banco'},
      {id: 12, nome: 'Matheus Araújo', description: 'lorem uisdosnm dps dsjdsdsjkd sldjadljas dalksdj sad'},
      {id: 13, nome: 'Paulinho', description: 'esse faz magia em campo, toda a vez que precisam dele, ele some.'},
      {id: 14, nome: 'Roni', description: 'tinha um futuro promissor no futebol se não fosse as drogas, as drogas das pernas.'},
      {id: 15, nome: 'Fausto Vera', description: 'fausto joga de terno, parece que tá morto.'},
      {id: 16, nome: 'Romero', description: 'quem não viu jogar acha que é ruim, quem viu, tem certeza'},
      {id: 17, nome: 'Giovane', description: 'jogador de rara precisão, raramente precisam dele'},
      {id: 18, nome: 'Gustavo Silva', description: 'esse é o ambidestro, chuta mal com as duas pernas'},
      {id: 19, nome: 'Yuri Alberto', description: 'mais conhecido como o bagre do futebol brasileiro'},
    ]
  }

  constructor() { }
}
