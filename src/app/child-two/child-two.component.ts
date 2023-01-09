import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from './child-two-one/books.model';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent {
  @Input() book: Book;
  @Output() bookWasSelected = new EventEmitter<Book>();

  books: Book[] = [
    new Book(
      'Alice in Wonderland',
      'Lewis Carroll',
      'https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.XXX.66287040.7055475/4075087.jpg'
    ),
    new Book(
      'If We Were Villains',
      'M. L. Rio ',
      'https://framemark.vam.ac.uk/collections/2009BX3032/full/735,/0/default.jpg'
    ),
  ];

  onBookSelected(book: Book) {
    this.bookWasSelected.emit(book);
  }
}
