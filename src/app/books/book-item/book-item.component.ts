import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { IBook } from '../book.model';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BooksService } from '../books.service';

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
    private deviceService: DeviceDetectorService,
    private booksService: BooksService) {

  }

  isMobile = this.deviceService.isMobile();
  ngOnInit(): void {

  }

  openDialog() {
    //let dialogRef = this.dialog.open(BookDetailsComponent, this.config);
    if (this.book && this.book.id) {
      this.booksService.updateRankBook(this.book.id).subscribe(resp => {
        if (resp.body) {
          let data = {}
          if (this.book?._formatted) {
            data = {
              bookName: this.book?._formatted.title,
              bookLanguage: this.book?.language,
              bookCover: this.book?.cover,
              bookSubject: this.book?.subject,
              bookRights: this.book?.rights,
              bookRank: this.book?.download,
              bookId: this.book?.id,
              bookText: this.book?.book,
              isDeviceMobile: this.isMobile
            }
          } else {
            data = {
              bookName: this.book?.title,
              bookLanguage: this.book?.language,
              bookCover: this.book?.cover,
              bookSubject: this.book?.subject,
              bookRights: this.book?.rights,
              bookRank: resp.body.download,
              bookId: this.book?.id,
              bookText: this.book?.book,
              isDeviceMobile: this.isMobile
            }
          }

          let dialogRef = this.dialog.open(BookDetailsComponent, {
            data: data, panelClass: "dialog-responsive"
          });
        }

      })
    }

  }

  closeDialog() {
    let dialogRef = this.dialog.closeAll();
  }


}