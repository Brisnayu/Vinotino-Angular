import { Component, OnInit, inject } from '@angular/core';
import { IPlayerService } from '../../contracts/IPlayerService.contract';
import { PlayersService } from '../../services/player-services/player.service';
import { CardInfo } from '../../models/card-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [{ provide: IPlayerService, useClass: PlayersService }],
})
export class HomeComponent implements OnInit {
  private playerService = inject(IPlayerService);
  cards: CardInfo[] = [];

  ngOnInit(): void {
    this.playerService.getCardInfo().subscribe((cards) => {
      this.cards = cards;
      // console.log("🔴", this.cards)
    });
  }
}
