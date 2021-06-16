import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import {BookService} from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book! : IBook;
  id! : number;
  route! : ActivatedRoute;
  errorMessage = '';

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.route = activatedRoute;
    }

  getBookDetails(id: number): void {
    this.bookService.getBookByIdFromServer(id).subscribe({
      next: b => this.book = b,
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void {
    console.log("activatedRoute:"+this.route)
    const param = this.route.snapshot.paramMap.get('id'); // this line allows to get the char id on a local variable called param
    if (param) {
      const id = +param; // the + converts the param (the id retrieved) to a number 
      this.getBookDetails(id);
    }
  }

  getImagePath(title: string): string {
    return '../../assets/images/' + title.replace(/ /g, "_").toLowerCase() + '.jpg';
  }

}
