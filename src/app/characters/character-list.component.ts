import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICharacter } from './character';
import { Subscription } from 'rxjs';
import { CharacterService } from './characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  showImage : boolean = false; 
  sub!: Subscription;
  imageWidth = 60;
  imageMargin = 5;
  errorMessage = '';

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

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getImagePath(title : string) : string {
      return '../assets/images/'+title.replace(/ /g, "_").toLowerCase()+'.jpg';
  }

  performFilter(filterBy: string): ICharacter[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.characters.filter((character: ICharacter) =>
      ((character.name.toLocaleLowerCase().includes(filterBy)) || 
      (character.gender.toLocaleLowerCase().includes(filterBy)) ||
      (character.culture.toLocaleLowerCase().includes(filterBy))
      ));
  }

  ngOnInit(): void {
    this.sub = this.characterService.getCharactersFromServer().subscribe({
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
