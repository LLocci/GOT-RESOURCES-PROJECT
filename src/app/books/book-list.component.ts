import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from './book';
import { BookService } from './books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnDestroy {
  showImage: boolean = false;
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

  books: IBook[] = [];
  filteredBooks: IBook[] = this.books;

  constructor(private bookService: BookService) {
    this.sub = this.bookService.getBooksFromServer().subscribe({
      next: books => {
        this.books = books;
      },
      error: err => this.errorMessage = err
    })
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getImagePath(title: string): string {
    return '../assets/images/' + title.replace(/ /g, "_").toLowerCase() + '.jpg';
  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
    ((book.name.toLocaleLowerCase().includes(filterBy)) ||
      (book.publisher.toLocaleLowerCase().includes(filterBy)) ||
      (book.isbn.toLocaleLowerCase().includes(filterBy))
    ));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
