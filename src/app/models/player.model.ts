import { Person } from './person.model';
import { Stats } from './stats.model';
import { Videos } from './videos.model';

export interface IPlayer {
  person: Person;
  stats: Stats;
  number: number;
  debut: string;
  position: string;
  starter: boolean;
  comment: string;
  img_url: string;
  videos: Videos[];
}
