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
  @Input() query?: string | null;

  constructor(private booksService: BooksService) {

  }

  ngOnInit(): void {
  }




}
