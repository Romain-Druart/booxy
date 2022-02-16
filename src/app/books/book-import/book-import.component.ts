import { Component, OnInit, Inject, Input } from '@angular/core';
import { faFloppyDisk, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BooksService } from '../books.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookAlertComponent } from '../book-alert/book-alert.component';

@Component({
  providers: [
    MatSnackBar
  ],
  selector: 'app-book-import',
  templateUrl: './book-import.component.html',
  styleUrls: ['./book-import.component.scss']
})
export class BookImportComponent implements OnInit {


  faFloppyDisk: any = faFloppyDisk;
  faCodeFork: any = faCodeFork;
  newBook: any = new FormControl('')
  durationInSeconds = 5;

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private booksService: BooksService
  ) { }
  ngOnInit(): void {
  }
  /**
   * Ajoute un livre à l'index 
   * @param event 
   */
  addBook() {
    if (this.newBook.value && this.newBook.value != ' ') {
      this.booksService.add(parseInt(this.newBook.value)).subscribe(resp => {
        this._snackBar.openFromComponent(BookAlertComponent, {
          duration: this.durationInSeconds * 1000,
          announcementMessage: "Livre ajouté avec succès!"
        });
      })
    }
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}
