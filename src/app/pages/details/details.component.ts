import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../classes/Player.class';
import { PlayersService } from '../../services/player-services/player.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private router = inject(Router);
  private playerService = inject(PlayersService);

  player: Player = {} as Player;
  private pathId = window.location.href.split('/').pop();
  private id = Number(this.pathId?.split('%')[0]);
  routerPage = `home`

  playerStats: { key: string; value: number }[] = [];

  ngOnInit(): void {
    this.playerService.getPlayerById(this.id).subscribe((result: Player) => {
      this.player = result;
      this.playerStats = Object.entries(this.player.stats).map(
        ([key, value]) => ({
          key,
          value,
        }),
      );
    });
  }

  navigateToVideos() {
    this.router.navigate([`/home/details/${this.pathId}/videos`]);
  }
}
