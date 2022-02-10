import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faCodeFork } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass: any = faMagnifyingGlass;
  faCodeFork: any = faCodeFork;


  constructor() { }

  ngOnInit(): void {
  }

}
