import {Component} from '@angular/core';
import {State} from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  private userName: string;


  constructor() {
    State.userName.subscribe(value => this.userName = value);

  }

}
