import { Component/*BS*/, Input/*BE*/ } from '@angular/core';
/*BS*/import { Book } from '../shared/book';/*BE*/

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  /*BS*/@Input() book?: Book;/*BE*/
}
