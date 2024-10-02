import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development');
    } else {
      console.log('Production');
    }
  }
}
