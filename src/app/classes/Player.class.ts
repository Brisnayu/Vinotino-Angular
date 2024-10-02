import { Person } from '../models/person.model';
import { IPlayer } from '../models/player.model';
import { Stats } from '../models/stats.model';
import { Videos } from '../models/videos.model';

export class Player implements IPlayer {
  person: Person;
  stats: Stats;
  number: number;
  debut: string;
  position: string;
  starter: boolean;
  comment: string;
  img_url: string;
  videos: Videos[];

  constructor(config: IPlayer) {
    this.ValidatePlayerConfig(config);
    this.person = config.person;
    this.stats = config.stats;
    this.number = config.number;
    this.debut = config.debut;
    this.position = config.position;
    this.starter = config.starter;
    this.comment = config.comment;
    this.img_url = config.img_url;
    this.videos = config.videos;
  }

  // Se debería configurar una clase por cada interface! De esta manera nos estamos asegurando que tengan valores válidos.
  // En cada una de las clases voy a tener mis propias validaciones. 

  private ValidatePlayerConfig(config: IPlayer): void {
    if (!config.number || typeof config.number !== 'number' || config.number < 0) {
      throw new Error('Invalid number');
    }
    if (!config.debut || typeof config.debut !== 'string' || config.debut.trim().length === 0) {
      throw new Error('Invalid debut name');
    }
  }
}
