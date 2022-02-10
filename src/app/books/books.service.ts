import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  resourceUrl = SERVER_API + 'indexes/books/';

  constructor(private readonly http: HttpClient) { }


  /**
   * 
   * @returns la liste des livres
   */
  getBooks(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.resourceUrl}/documents`, {
      observe: 'response',
    });
  }
}
