import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICharacter } from './character';

@Injectable({
    providedIn: 'root'
  })
  export class CharacterService {
    // If using Stackblitz, replace the url with this line
    // because Stackblitz can't find the api folder.
    // private productUrl = 'assets/products/products.json';
    private characterUrl = 'https://anapioficeandfire.com/api/characters';
  
    constructor(private http: HttpClient) { }
  
    getCharactersFromServer(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>(this.characterUrl);
    }

    // Get one character
    // Since we are working with a json file, we can only retrieve all characters
    // So retrieve all characters and then find the one we want using 'map'
    getCharacter(name: string): Observable<ICharacter | undefined> {
        return this.getCharactersFromServer()
        .pipe(
            map((characters: ICharacter[]) => characters.find(c => c.name === name))
        );
    }

    getCharacterbyIdFromServer(id : number): Observable<ICharacter | undefined> {
      return this.http.get<ICharacter>(`${this.characterUrl}/${id}`);
    }
}
