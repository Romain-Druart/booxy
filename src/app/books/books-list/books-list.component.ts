import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
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


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  // openDialog() {
  //   let dialogRef = this.dialog.open(BookDetailsComponent, {
  //     height: '400px',
  //     width: '600px'
  //   });
  // }

}
