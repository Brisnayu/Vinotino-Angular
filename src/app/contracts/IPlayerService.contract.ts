import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardInfo } from '../models/card-info.model';
import { Player } from '../classes/Player.class';

@Injectable()
export abstract class IPlayerService {
  public abstract getCardInfo(): Observable<CardInfo[]>;
  public abstract getPlayerById(id: number): Observable<Player>;
}
