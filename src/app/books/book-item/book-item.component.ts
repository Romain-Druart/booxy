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

  constructor(
    public dialog: MatDialog,
    private deviceService: DeviceDetectorService) {
  }

  isMobile = this.deviceService.isMobile();
  ngOnInit(): void {
  }

  openDialog() {

    //let dialogRef = this.dialog.open(BookDetailsComponent, this.config);

    let dialogRef = this.dialog.open(BookDetailsComponent, {
      data: {
        bookName: this.book?.title,
        bookLanguage: this.book?.language,
        bookCover: this.book?.cover,
        bookSubject: this.book?.subject,
        bookRights: this.book?.rights,
        isDeviceMobile: this.isMobile
      },
      panelClass: "dialog-responsive"
    });
  }

  closeDialog() {
    let dialogRef = this.dialog.closeAll();
  }
}