import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { Route, Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  authors: Author[] = [];
  author: Author = { name: '', quotes: null };
  error = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) {
    // this.author = this.findAuthor();
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.findAuthor();
  }

  onSubmit(author: Author) {
    if(this.author.name.length >= 3) {
      this._http.editAuthor(author).subscribe(data => this.author = data );
      this._router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }

  findAuthor() {
    this._http.getAuthor(this.id).subscribe(data => this.author = data );
  }

}