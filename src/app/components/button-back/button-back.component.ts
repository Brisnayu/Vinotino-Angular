import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss'
})
export class ButtonBackComponent {
  private router = inject(Router);

  @Input() routePage!: string; 

  goBack() {
    if (this.routePage) {
      this.router.navigate([this.routePage]);
    } else {
      console.error('Error 404');
    }
  }
}
