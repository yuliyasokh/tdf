import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angual', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@gmail.com', 55555, '', 'morning', true);
}
