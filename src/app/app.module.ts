import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksModule } from './books/books.module';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BookImportComponent } from './books/book-import/book-import.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAlertComponent } from './books/book-alert/book-alert.component';
import { } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookImportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BooksModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
