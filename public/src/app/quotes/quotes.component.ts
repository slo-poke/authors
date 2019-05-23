import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Quotes } from '../quotes';
import { Author } from '../author';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [];
  author: Author;
  id: string;
  authorName: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getQuotes(this.id);
   }

  getQuotes(id: string): void {
    this._http.getQuotes(id).subscribe(data => {
      console.log(data);
      this.author = data[0];
      this.authorName = data[0].name;
      this.quotes = data[0].quotes;
    });
  }

  delete(id: number): void {
    this._http.deleteQuote(id).subscribe(data => console.log('Successfully deleted quote!'));
    this.getQuotes(this.id);
  }

  vote(id: number, val: number): void {
// tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < this.author.quotes.length; i++) {
      if(id === this.author.quotes[i].id) {
        this.author.quotes[i].votes += val;
        return;
      }
    }
    this.getQuotes(this.id);
  }

}
