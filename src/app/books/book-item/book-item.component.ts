import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { IBook } from '../book.model';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book?: IBook | null;
  bookTitle: string | undefined;

  constructor(
    public dialog: MatDialog,
    private deviceService: DeviceDetectorService) {
    if (this.book && this.book._formatted) {
      this.bookTitle = this.book?._formatted?.title
    } else {
      this.bookTitle = this.book?.title
    }
    console.log(this.bookTitle);
  }

  isMobile = this.deviceService.isMobile();
  ngOnInit(): void {

  }

  openDialog() {

    //let dialogRef = this.dialog.open(BookDetailsComponent, this.config);
    if (this.bookTitle != undefined) {
      let dialogRef = this.dialog.open(BookDetailsComponent, {
        data: {
          bookName: this.bookTitle,
          bookLanguage: this.book?.language,
          bookCover: this.book?.cover,
          bookSubject: this.book?.subject,
          bookRights: this.book?.rights,
          isDeviceMobile: this.isMobile,
          bookSearched: this.book?._formatted
        },
        panelClass: "dialog-responsive"
      });
    }


  }

  closeDialog() {
    let dialogRef = this.dialog.closeAll();
  }
}