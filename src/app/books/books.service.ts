import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_LOCAL_FLASK, SERVER_LOCAL_MEILISEARCH } from '../app.constants';
import { IBook, IFacet, ISearchHits } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  resourceUrlBooks = SERVER_LOCAL_MEILISEARCH + 'indexes/books/';
  resourceUrlRank = SERVER_LOCAL_FLASK + 'api/add-rank/';
  resourceUrl = SERVER_LOCAL_FLASK + 'api/';


  constructor(private readonly http: HttpClient) { }



  /**
   * 
   * @returns 
   */
  getFacets(): Observable<HttpResponse<IFacet>> {
    return this.http.get<IFacet>(`${this.resourceUrl}get-facets`, { observe: 'response' })
  }


  /**
   * 
   * @param query 
   * @returns une liste de livres en fonction du mot saisie
   */
  search(query: string, offset?: number, filter?: Array<string>): Observable<HttpResponse<ISearchHits>> {
    let body = {}
    if (offset && offset > 0 && (query === '' || query === ' ')) {
      body = {
        q: query,
        offset: offset,
      }
    }
    else if (offset && offset > 0) {
      body = {
        q: query,
        attributesToHighlight: ["*"],
        offset: offset
      }
    } else if (query != '' && query != ' ') {
      body = {
        q: query,
        attributesToHighlight: ["*"]
      }
    } else {
      body = {
        q: query
      }
    }

    if (filter && filter.length > 0) {
      body = {
        ...body,
        filter: filter
      }
    }

    return this.http.post<ISearchHits>(`${this.resourceUrlBooks}/search`, body, {
      observe: 'response',
    });
  }

  /***
   * Mise à jour du rank (score) pour un livre
   */
  updateRankBook(id: number): Observable<HttpResponse<IBook>> {
    return this.http.get(`${this.resourceUrlRank}${id}`, { observe: 'response' });
  }

  /**
   * Ajoute un livre à l'index 
   * @param id 
   * @returns 
   */
  add(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}add-book/${id}`, { observe: 'response' });
  }
}
