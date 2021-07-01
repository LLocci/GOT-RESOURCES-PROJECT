import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ICharacter } from './character';
import { Subscription } from 'rxjs';
import { CharacterService } from './characters.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
 
  sub!: Subscription;
  errorMessage = '';
  pageIndex = 1 ;
  pageSize = 10; 
  pageEvent! : PageEvent;


  private _listFilter = '';
    get listFilter(): string { //getter
      return this._listFilter;
    }
    set listFilter(value: string) {// setter
      this._listFilter = value;
      this.filteredCharacters = this.performFilter(value);
    }

    characters : ICharacter[] = [] ;
    filteredCharacters: ICharacter[] = this.characters;

  constructor(private characterService: CharacterService) { }


  performFilter(filterBy: string): ICharacter[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.characters.filter((character: ICharacter) =>
      ((character.name.toLocaleLowerCase().includes(filterBy)) || 
      (character.gender.toLocaleLowerCase().includes(filterBy)) ||
      (character.culture.toLocaleLowerCase().includes(filterBy))
      ));
  }
    
  onChangePage(pe:PageEvent) {

    this.pageEvent = pe;
    this.pageIndex = pe.pageIndex;
    this.pageSize = pe.pageSize;

    this.sub = this.characterService.getCharactersFromServer(pe.pageIndex, pe.pageSize).subscribe({
      next: characters => {
        this.characters = characters;
        characters.forEach(function(c){
          c.id = c.url.split('/').pop() as unknown as number; 
        }); // get the id from the url

      },
      error : err => this.errorMessage = err
  });
  }

  ngOnInit(): void {
    this.sub = this.characterService.getCharactersFromServer(this.pageIndex, this.pageSize).subscribe({
        next: characters => {
          this.characters = characters;
          characters.forEach(function(c){
            c.id = c.url.split('/').pop() as unknown as number; 
          }); // get the id from the url
 
        },
        error : err => this.errorMessage = err
    })
 }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
