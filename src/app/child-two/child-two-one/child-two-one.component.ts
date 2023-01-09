import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-child-two-one',
  templateUrl: './child-two-one.component.html',
  styleUrls: ['./child-two-one.component.css'],
})
export class ChildTwoOneComponent {
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<void>();

  onSelected() {
    this.bookSelected.emit();
  }
}
