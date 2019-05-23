import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { Author } from './author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authors: Author[] = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getAuthors().subscribe(data => {this.authors = data;
      console.log(data); });
  }



  // onSave = function(user, isValid: boolean) {
  //   user.mode = this.valbutton;
  //   this.newService.saveUser(user)
  //   .subscribe(data => { alert(data.data);
  //   this.ngOnInit();
  // },
  // error => this.errorMessage = error )
  // }

  // edit = function(kk) {
  //   this.id = kk._id;
  //   this.name = kk.name;
  //   this.address = kk.address;
  //   this.valbutton = "Update";
  // }

  // delete = function(id) {
  //   this.newService.deleteUser(id)
  //   .subscribe(data => { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error)
  // }
}
