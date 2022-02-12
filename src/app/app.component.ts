import { Component, OnInit } from '@angular/core';
import { IBook } from './books/book.model';


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

  constructor() {
    this.nbHits = null
    this.times = null;
    this.books = null;
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
}
