import {Component, OnInit} from '@angular/core';
import { User } from './user';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
   constructor(private _auth: ServiceService) {}
   userModel = new User('Enter your Data');
   postdata: any

   ngOnInit(){
       this._auth.showFunction().subscribe(res => this.postdata = res.data);
   }
   onSubmit() {
       this._auth.postFunction(this.userModel).subscribe(res => console.log(res));
   }
}
