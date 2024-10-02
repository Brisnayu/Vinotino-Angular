import { Component, OnInit, inject } from '@angular/core';
import { PlayersService } from '../../services/player-services/player.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Player } from '../../classes/Player.class';
import { EncryptionService } from '../../services/encryp-services/encryption.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  private playerService = inject(PlayersService);
  private encryptionService = inject(EncryptionService);
  private sanitizer = inject(DomSanitizer);
  private pathId = window.location.href.split('details').pop();
  private id = Number(this.pathId?.[1]);

  private urlEncrypted: string = 'U2FsdGVkX19fM2lzRQkSx9rkfgfDMZ6K3ZwCvjJEXyLoIDSM7YewXR5fxD5pyKY/'

  player: Player = {} as Player;
  routerPage = `home/details/${this.id}%20`

  videosPlayer: { key: string; value: string }[] = [];

  ngOnInit(): void {
    this.playerService.getPlayerById(this.id).subscribe({
      next: (result: Player) => {
        this.player = result;
        this.videosPlayer = Object.entries(this.player.videos).map(([key, value]) => ({
          key: key.toString(),
          value: value.toString()
        }));
      },
      error: (error) => {
        console.error('Error fetching videos:', error);
      }
    });
  }

  getVideoYoutube(link: string): SafeResourceUrl {
    const videoDescrypt = this.encryptionService.decryptContent(this.urlEncrypted)

    if (link !== undefined && link.includes('v=')) {
      const videoPlayer = link.split('v=')[1];
      const videoUrl = `${videoDescrypt}${videoPlayer}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

}
