import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_LOCAL_API } from '../app.constants';
import { IBook, ISearchHits } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  resourceUrl = SERVER_LOCAL_API + 'indexes/books/';

  constructor(private readonly http: HttpClient) { }


  /**
   * 
   * @returns la liste des livres
   */
  get(): Observable<HttpResponse<IBook[]>> {
    return this.http.get<IBook[]>(`${this.resourceUrl}/documents`, {
      observe: 'response',
    });
  }


  /**
   * 
   * @param query 
   * @returns une liste de livres en fonction du mot saisie
   */
  search(query: string): Observable<HttpResponse<ISearchHits>> {
    return this.http.get<ISearchHits>(`${this.resourceUrl}/search?q=${query}`, {
      observe: 'response',
    });
  }
}
