import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { Subscription } from 'rxjs';
import { BookService } from './books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    showImage : boolean = false; 
    listFilter : string = 'book';
    sub!: Subscription;
    books : IBook[] = [] ;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.sub = this.bookService.getBooksFromServer().subscribe({
        next: books => {
          this.books = books;
        }
    })
 }

}
