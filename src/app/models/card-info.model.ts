import { IPlayer } from './player.model';

export interface CardInfo {
  id: IPlayer['person']['id'];
  name: IPlayer['person']['name'];
  img_url: IPlayer['img_url'];
}
