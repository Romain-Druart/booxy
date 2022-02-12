import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BooksModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
