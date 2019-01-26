import {Component, OnInit} from '@angular/core';
import { User } from './user';
import {ServiceService} from './service.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
   constructor(private _auth: ServiceService,private _router: Router) {}
   userModel = new User('');
   postdata: any

   ngOnInit(){
       this._auth.showFunction().subscribe(res => this.postdata = res.data);
   }
   onSubmit() {
       this._auth.postFunction(this.userModel).subscribe(res=> console.log(res));
       this.ngOnInit();
   }
   delete_data(data){
      this._auth.deleteFunction(data).subscribe();
      this.ngOnInit();
   }
}
