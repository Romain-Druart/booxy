import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAlertComponent } from './book-alert.component';

describe('BookAlertComponent', () => {
  let component: BookAlertComponent;
  let fixture: ComponentFixture<BookAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
