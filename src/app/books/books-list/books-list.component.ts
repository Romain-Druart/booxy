import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { IBook } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() books?: IBook[] | null;
  @Input() nbHits?: number | null;
  @Input() times?: number | null;
  @Input() query?: string | null;
  selector: string;
  offset: number | null;


  constructor(private booksService: BooksService) {
    this.offset = 0;
    this.selector = '.books-container';
  }

  ngOnInit(): void {
  }


  onScroll() {
    if (this.query != undefined) {
      if (this.offset != undefined) {
        this.offset += 20;
        this.booksService.search(this.query, this.offset).subscribe(resp => {
          if (resp.body?.nbHits) {
            if (resp.body?.hits) this.books = this.books?.concat(resp.body.hits);
            if (resp.body?.processingTimeMs) this.times = resp.body.processingTimeMs;
            if (this.books && this.nbHits) this.nbHits = resp.body.nbHits;
          }

        })
      }
    }
  }
}
