import { Component, Input, OnInit } from '@angular/core';
import { IBook } from './../books/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book!: IBook
  showImage: boolean = false;

  constructor() {
    console.log(this.book);
  }

  ngOnInit(): void {
    console.log(this.book);
  }

  getImagePath(title: string): string {
    return '../assets/images/' + title.replace(/ /g, "_").toLowerCase() + '.jpg';
  }

}
