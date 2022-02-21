import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faShareFromSquare, faCodeFork } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  template: 'passed in {{ data.bookName, data.bookLanguage, data.bookSubject, data.bookCover, data.bookRights }}',
})
export class BookDetailsComponent implements OnInit {

  faShareFromSquare: any = faShareFromSquare;
  faCodeFork: any = faCodeFork;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    bookName: string,
    bookLanguage: string,
    bookSubject: string,
    bookCover: string,
    bookRights: string,
    bookRank: string,
    bookText: string,
    isDeviceMobile: boolean
  }, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();

  }

}
