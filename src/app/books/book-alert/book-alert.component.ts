import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-alert',
  templateUrl: './book-alert.component.html',
  styleUrls: ['./book-alert.component.scss'],
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class BookAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
