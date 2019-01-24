import { Component } from '@angular/core';
import { User } from './user';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   constructor(private _auth: ServiceService) {}
   userModel = new User('Enter your Data');
   onSubmit() {
      this._auth.postFunction(this.userModel).subscribe(res => console.log(res));
  }
}
