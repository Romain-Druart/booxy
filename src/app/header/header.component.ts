import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faCodeFork, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IBook } from '../books/book.model';
import { BooksService } from '../books/books.service';
import { BookImportComponent } from '../books/book-import/book-import.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookAlertComponent } from '../books/book-alert/book-alert.component';


export interface DialogData {
  newBook: string;
}

@Component({
  providers: [
    MatSnackBar
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass: any = faMagnifyingGlass;
  faCodeFork: any = faCodeFork;
  faPlus: any = faPlus;
  @Input() filters?: string[];
  @Output() books = new EventEmitter<IBook[]>();
  @Output() nbHits = new EventEmitter<number>();
  @Output() times = new EventEmitter<number>();
  @Output() query = new EventEmitter<string>();
  @Output() isShow = new EventEmitter<boolean>();

  newBook: string = "";
  durationInSeconds = 5;

  constructor(
    private booksService: BooksService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  /**
 * @returns fetch la liste des livres
 */
  getBooks() {
    this.booksService.search('').subscribe(resp => {
      if (resp.body?.hits) this.books.emit(resp.body.hits);
      if (resp.body?.processingTimeMs) this.times.emit(resp.body.processingTimeMs);
      if (resp.body?.nbHits) this.nbHits.emit(resp.body?.nbHits);
    })
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(BookImportComponent, {
      panelClass: "dialog-responsive",
      height: "200px",
      data: { newBook: this.newBook }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newBook = result;
    });
  }


  /**
   * Met à jour la liste de livres, du nombre de livre et le temps de requete après une recherche 
   */
  searchBooks(event: EventTarget | null) {
    if (event) {
      const target = event as HTMLInputElement;
      if (target.value != '' && target.value.length > 0) {
        this.booksService.search(target.value).subscribe(resp => {
          if (resp.body?.hits) this.books.emit(resp.body.hits)
          if (resp.body?.nbHits) this.nbHits.emit(resp.body.nbHits);
          if (resp.body?.processingTimeMs) this.times.emit(resp.body.processingTimeMs);
          this.query.emit(target.value);
        })
      } else if (target.value === '') {
        this.booksService.search('').subscribe(resp => {
          if (resp.body) {
            this.books.emit(resp.body.hits)
            this.nbHits.emit(resp.body.nbHits)
            this.times.emit(resp.body.processingTimeMs);
            this.query.emit(target.value);
          }
        })
      }
    }
  }
}
