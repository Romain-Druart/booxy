import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';


@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [BooksService],
    declarations: [BooksComponent, BookItemComponent, BooksListComponent],
    exports: [BooksComponent, BookItemComponent, BooksListComponent],

})
export class BooksModule { }
