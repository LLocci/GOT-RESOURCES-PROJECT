import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from './book';
import { Subscription } from 'rxjs';
import { BookService } from './books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

    sub!: Subscription;
    errorMessage = '';

    private _listFilter = '';
    get listFilter(): string { //getter
      return this._listFilter;
    }
    set listFilter(value: string) {// setter
      this._listFilter = value;
      this.filteredBooks = this.performFilter(value);
    }

    books : IBook[] = [] ;
    filteredBooks: IBook[] = this.books;

  constructor(private bookService: BookService) {}

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
      ((book.name.toLocaleLowerCase().includes(filterBy)) || 
      (book.publisher.toLocaleLowerCase().includes(filterBy)) ||
      (book.isbn.toLocaleLowerCase().includes(filterBy))
      ));
  }

  ngOnInit(): void {
    this.sub = this.bookService.getBooksFromServer().subscribe({
        next: books => {
          this.books = books;
        },
        error : err => this.errorMessage = err
    })
 }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
