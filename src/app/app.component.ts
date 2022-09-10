import { Component } from '@angular/core';
import { Model ,person} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address-Book';
  model = new Model();
  getName(){
    return this.model.user;
  }
  getDetails(){
    return this.model.details;
  }
  addNewDetail(name: string,phno: string,email: string,address: string){
    if(phno != "" && email != "" && name != '' && address != ""){
      this.model.details.push(new person(name,phno,email,address));
    }
  }
}
