import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // authorsUrl: string;

  constructor(private _http: HttpClient) { 
    // this.authorsUrl = '/api/authors';
  }

  getAuthors(): Observable<Author[]> {
    return this._http.get<Author[]>('/api/authors');
  }

  getAuthor(id: string): Observable<Author> {
    return this._http.get<Author>(`api/authors/${id}`);
  }

  createAuthor(author: Author): Observable<Author> {
    return this._http.post<Author>('/api/authors', author);
  }

  editAuthor(author: Author): Observable<any> {
    return this._http.put(`/api/authors/${author._id}`, author);
  }

  deleteAuthor(id: string): Observable<{}> {
    return this._http.delete<Author>(`/api/authors/${id}`);
  }
}
