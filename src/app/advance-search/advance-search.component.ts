import { query } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IBook } from '../books/book.model';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  @Output() books = new EventEmitter<IBook[]>();
  @Output() times = new EventEmitter<number>();
  @Output() nbHits = new EventEmitter<number>();
  @Output() filters = new EventEmitter<string[]>();
  @Output() query = new EventEmitter<string>();

  subjects: string[];
  authors: string[];
  languages: string[];

  currentSubject: string;
  currentLanguage: string;
  currentAuthor: string;
  currentQuery: string;

  faPlus: any = faPlus;


  constructor(private fb: FormBuilder, private booksService: BooksService) {
    this.subjects = [];
    this.authors = [];
    this.languages = [];
    this.currentAuthor = '';
    this.currentLanguage = '';
    this.currentSubject = '';
    this.currentQuery = '';
  }

  ngOnInit(): void {
    this.updateForm();
  }

  /**
   * Met à jour la liste des sujets, auteurs et langues
   */
  updateForm() {
    this.booksService.getFacets().subscribe(resp => {
      if (resp.body) {
        this.subjects = resp.body.subject,
          this.authors = resp.body.author,
          this.languages = resp.body.language
      }
    })
  }

  /**
   * Effectue une recherche avancée
   */
  search() {
    let filter: string[] = [];

    let filterSubject = "";
    if (this.currentSubject && this.currentSubject != '') {
      filterSubject = "subject='" + this.currentSubject + "'";
      filter.push(filterSubject);
    }
    let filterLanguage = "";
    if (this.currentLanguage && this.currentLanguage != '') {
      filterLanguage = "language='" + this.currentLanguage + "'";
      filter.push(filterLanguage);
    }
    let filterAuthor = "";
    if (this.currentAuthor && this.currentAuthor != '') {
      filterAuthor = "author='" + this.currentAuthor + "'";
      filter.push(filterAuthor);
    }
    let query = '';
    if (this.currentQuery && this.currentQuery != '') {
      query = this.currentQuery;
    } else {
      query = '';
    }

    this.booksService.search(query, 0, filter).subscribe(resp => {
      if (resp.body) {
        if (resp.body.hits) this.books.emit(resp.body.hits);
        if (resp.body.nbHits) this.nbHits.emit(resp.body.nbHits);
        if (resp.body.processingTimeMs) this.times.emit(resp.body.processingTimeMs);
        this.filters.emit(filter);
        if (query != '') this.query.emit(query)
      }
    })
  }

  clearFilter() {
    this.currentAuthor = "";
    this.currentLanguage = "";
    this.currentSubject = "";
    this.currentQuery = "";
  }
}
