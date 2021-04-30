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

    showImage : boolean = false; 
    listFilter : string = 'book';
    sub!: Subscription;
    imageWidth = 60;
    imageMargin = 5;
    errorMessage = '';
    books : IBook[] = [] ;

  constructor(private bookService: BookService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getImagePath(title : string) : string {
      return '../assets/images/'+title.replace(/ /g, "_").toLowerCase()+'.jpg';
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
