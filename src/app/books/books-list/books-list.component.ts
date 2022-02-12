import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.model';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() books?: IBook[] | null;
  @Input() nbHits?: number | null;
  @Input() times?: number | null;


  constructor() {
  }

  ngOnInit(): void {
  }

}
