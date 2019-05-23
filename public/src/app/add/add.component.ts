import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Author } from '../author';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  author: Author;
  error = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) { }

  ngOnInit() {
    this.author = { name: '', quotes: null };
  }

  onSubmit() {
    if(this.author.name.length >= 3) {
      this._http.createAuthor(this.author).subscribe(data => {
        console.log('Added new author!');
        this.author = { name: '', quotes: null};
        this.goHome();
      });
    } else {
      this.error = true;
    }
  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
