import { Component, Input, OnInit } from '@angular/core';
import { IBook } from './../book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book!: IBook;
  id!: number | undefined;
  showImage: boolean = false;

  constructor() {
    console.log("load book:"+this.book);
  }

  ngOnInit(): void {
    this.id = this.book.url.split('/').pop() as number | undefined;
    console.log("id:"+this.id);
  }

  getImagePath(title: string): string {
    return '../../assets/images/' + title.replace(/ /g, "_").toLowerCase() + '.jpg';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
