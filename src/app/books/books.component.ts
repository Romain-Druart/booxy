import { Component, Input, OnInit } from '@angular/core';
import { IBook } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input() books?: IBook[] | null;
  @Input() nbHits?: number | null;
  @Input() times?: number | null;

  constructor(private booksService: BooksService) {

  }

  ngOnInit(): void {
    this.getBooks();
  }

  /**
   * @returns fetch la liste des livres
   */
  getBooks() {
    this.booksService.search('').subscribe(resp => {
      if (resp.body?.hits) this.books = resp.body.hits;
      if (resp.body?.nbHits) this.times = resp.body.nbHits;
      if (this.books) this.nbHits = this.books.length;

    })
  }



}
