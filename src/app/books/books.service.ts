import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IBook } from './book';

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
    
    private bookUrl = 'https://anapioficeandfire.com/api/books';
  
    constructor(private http: HttpClient) { }
  
    getBooksFromServer(): Observable<IBook[]> {
      return this.http.get<IBook[]>(this.bookUrl);
    }

    getBookByIdFromServer(id : number): Observable<IBook> {
      return this.http.get<IBook>(`${this.bookUrl}/${id}`);
    }

    // Get one book
    // Since we are working with a json file, we can only retrieve all books
    // So retrieve all products and then find the one we want using 'map'
    getBook(title: string): Observable<IBook | undefined> {
        return this.getBooksFromServer()
        .pipe(
            map((books: IBook[]) => books.find(b => b.name === title))
        );
    }
  }