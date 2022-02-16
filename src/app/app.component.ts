import { Component, OnInit } from '@angular/core';
import { IBook } from './books/book.model';
import { BooksService } from './books/books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booxy';
  nbHits: number | null;
  times: number | null;
  books: IBook[] | null;
  query: string | null;
  filters: string[];

  constructor(private booksService: BooksService) {
    this.nbHits = null
    this.times = null;
    this.books = null;
    this.query = '';
    this.filters = [];
  }

  /**
   * Met à jour des données dans le composant books
   */
  updateNbHits(value: any) {
    this.nbHits = value;
  }
  updateTimes(value: any) {
    this.times = value;
  }
  updateBooks(value: any) {
    this.books = value;
  }
  updateQuery(value: any) {
    this.query = value;
  }
  updateFilter(value: any) {
    this.filters = value;
  }


}
