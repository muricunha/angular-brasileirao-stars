import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-atualization',
  templateUrl: './atualization.component.html',
  styleUrls: ['./atualization.component.scss']
})
export class AtualizationComponent implements OnInit {

  player: any[] = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayers();
  }

}
