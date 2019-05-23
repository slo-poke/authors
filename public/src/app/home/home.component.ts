import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Author } from '../author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: Author[];

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) { }

  ngOnInit() {
    this._http.getAuthors().subscribe(data => {
      this.authors = data;
      console.log(this.authors);
    });
  }

  // delete(id: string): void {
  //   this._http.deleteAuthor(id).subscribe(data => console.log(data));
  //   this._http.getAuthors().subscribe(data => this.authors = data );
  // }

}
