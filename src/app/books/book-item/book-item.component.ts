import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.model';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book?: IBook | null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
