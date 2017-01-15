import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array: number[] = [];

  constructor() {
    for(let i=0;i<100;i++){
      this.array.push(i);
    }
  }
}
