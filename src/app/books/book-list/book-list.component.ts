import { Component, OnInit } from '@angular/core';
import { IBook } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    showImage : boolean = false; 
    listFilter : string = 'book';
    books : IBook[] = [
      {
          "url": "https://www.anapioficeandfire.com/api/books/1",
          "name": "A Game of Thrones",
          "isbn": "978-0553103540",
          "authors": [
              "George R. R. Martin"
          ],
          "numberOfPages": 694,
          "publisher": "Bantam Books",
          "country": "United States",
          "mediaType": "Hardcover",
          "released": "1996-08-01T00:00:00",
          "characters": [
              "https://www.anapioficeandfire.com/api/characters/2014",
              "https://www.anapioficeandfire.com/api/characters/2020",
              "https://www.anapioficeandfire.com/api/characters/2025",
              "https://www.anapioficeandfire.com/api/characters/2029",
              "https://www.anapioficeandfire.com/api/characters/2044",
              "https://www.anapioficeandfire.com/api/characters/2071",
              "https://www.anapioficeandfire.com/api/characters/2073",
              "https://www.anapioficeandfire.com/api/characters/2076",
              "https://www.anapioficeandfire.com/api/characters/2089",
              "https://www.anapioficeandfire.com/api/characters/2114",
              "https://www.anapioficeandfire.com/api/characters/2119",
              "https://www.anapioficeandfire.com/api/characters/2121"
          ],
          "povCharacters": [
              "https://www.anapioficeandfire.com/api/characters/148",
              "https://www.anapioficeandfire.com/api/characters/208",
              "https://www.anapioficeandfire.com/api/characters/232",
              "https://www.anapioficeandfire.com/api/characters/339",
              "https://www.anapioficeandfire.com/api/characters/583",
              "https://www.anapioficeandfire.com/api/characters/957",
              "https://www.anapioficeandfire.com/api/characters/1052",
              "https://www.anapioficeandfire.com/api/characters/1109",
              "https://www.anapioficeandfire.com/api/characters/1303"
          ]
      },
      {
          "url": "https://www.anapioficeandfire.com/api/books/2",
          "name": "A Clash of Kings",
          "isbn": "978-0553108033",
          "authors": [
              "George R. R. Martin"
          ],
          "numberOfPages": 768,
          "publisher": "Bantam Books",
          "country": "United States",
          "mediaType": "Hardback",
          "released": "1999-02-02T00:00:00",
          "characters": [
             
              "https://www.anapioficeandfire.com/api/characters/2020",
              "https://www.anapioficeandfire.com/api/characters/2028",
              "https://www.anapioficeandfire.com/api/characters/2030",
              "https://www.anapioficeandfire.com/api/characters/2034",
              "https://www.anapioficeandfire.com/api/characters/2037",
              "https://www.anapioficeandfire.com/api/characters/2042",
              "https://www.anapioficeandfire.com/api/characters/2044",
              "https://www.anapioficeandfire.com/api/characters/2045",
              "https://www.anapioficeandfire.com/api/characters/2046",
              "https://www.anapioficeandfire.com/api/characters/2085",
              "https://www.anapioficeandfire.com/api/characters/2090",
              "https://www.anapioficeandfire.com/api/characters/2091",
              "https://www.anapioficeandfire.com/api/characters/2093",
              "https://www.anapioficeandfire.com/api/characters/2095",
              "https://www.anapioficeandfire.com/api/characters/2096",
              "https://www.anapioficeandfire.com/api/characters/2097",
              "https://www.anapioficeandfire.com/api/characters/2109",
              "https://www.anapioficeandfire.com/api/characters/2111",
              "https://www.anapioficeandfire.com/api/characters/2116",
              "https://www.anapioficeandfire.com/api/characters/2122",
              "https://www.anapioficeandfire.com/api/characters/2126"
          ],
          "povCharacters": [
              "https://www.anapioficeandfire.com/api/characters/148",
              "https://www.anapioficeandfire.com/api/characters/208",
              "https://www.anapioficeandfire.com/api/characters/232",
              "https://www.anapioficeandfire.com/api/characters/583",
              "https://www.anapioficeandfire.com/api/characters/957",
              "https://www.anapioficeandfire.com/api/characters/1022",
              "https://www.anapioficeandfire.com/api/characters/1052",
              "https://www.anapioficeandfire.com/api/characters/1295",
              "https://www.anapioficeandfire.com/api/characters/1303",
              "https://www.anapioficeandfire.com/api/characters/1319"
          ]
      },
      {
          "url": "https://www.anapioficeandfire.com/api/books/3",
          "name": "A Storm of Swords",
          "isbn": "978-0553106633",
          "authors": [
              "George R. R. Martin"
          ],
          "numberOfPages": 992,
          "publisher": "Bantam Books",
          "country": "United States",
          "mediaType": "Hardcover",
          "released": "2000-10-31T00:00:00",
          "characters": [
             
              "https://www.anapioficeandfire.com/api/characters/1479",
              "https://www.anapioficeandfire.com/api/characters/1481",
              "https://www.anapioficeandfire.com/api/characters/1487",
              "https://www.anapioficeandfire.com/api/characters/1488",
              "https://www.anapioficeandfire.com/api/characters/1494",
              "https://www.anapioficeandfire.com/api/characters/2131",
              "https://www.anapioficeandfire.com/api/characters/2134",
              "https://www.anapioficeandfire.com/api/characters/2137"
          ],
          "povCharacters": [
              "https://www.anapioficeandfire.com/api/characters/148",
              "https://www.anapioficeandfire.com/api/characters/208",
              "https://www.anapioficeandfire.com/api/characters/232",
              "https://www.anapioficeandfire.com/api/characters/529",
              "https://www.anapioficeandfire.com/api/characters/583",
              "https://www.anapioficeandfire.com/api/characters/751",
              "https://www.anapioficeandfire.com/api/characters/954",
              "https://www.anapioficeandfire.com/api/characters/957",
              "https://www.anapioficeandfire.com/api/characters/1052",
              "https://www.anapioficeandfire.com/api/characters/1267",
              "https://www.anapioficeandfire.com/api/characters/1303",
              "https://www.anapioficeandfire.com/api/characters/1319"
          ]
      }
  ] ;

  constructor() {}

  ngOnInit(): void {
    console.log('Component initialised!');
  }

}
