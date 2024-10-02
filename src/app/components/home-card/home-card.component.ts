import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardInfo } from '../../models/card-info.model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  private router = inject(Router);

  @Input() card: CardInfo = {} as CardInfo;

  navigateToDetails(id: number): void {
    this.router.navigate([`home/details/${id} `]);
  }
}
