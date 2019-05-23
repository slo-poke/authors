import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Author } from '../author';
import { Quote } from '@angular/compiler';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent implements OnInit {
  id: string;
  author: Author = { name: '', quotes: null };
  quote: Quotes;
  error = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) { 
    this.quote = { id: null, quote: null, votes: 0 };
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.getAuthor(this.id).subscribe(data => this.author = data );
  }

  onSubmit() {
    if(this.quote.quote.length >= 3) {
      this.quote.id = Math.floor(Math.random() * (9999 - 0)); // generate random num for quote id
      this.author.quotes.push(this.quote);
      this._http.editAuthor(this.author).subscribe(data => console.log('New Quote has been added!'));
      this._router.navigate(['quotes/' + this.id]);
    } else {
      this.error = true;
    }
  }
}
