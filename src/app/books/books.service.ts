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
   * @param query 
   * @returns une liste de livres en fonction du mot saisie
   */
  search(query: string, page?: number): Observable<HttpResponse<ISearchHits>> {
    let body = {}
    if (query != '' && query != ' ') {
      body = {
        q: query,
        attributesToHighlight: ["*"]
      }
    } else {
      body = {
        q: query
      }
    }

    return this.http.post<ISearchHits>(`${this.resourceUrl}/search`, body, {
      observe: 'response',
    });
  }
}
