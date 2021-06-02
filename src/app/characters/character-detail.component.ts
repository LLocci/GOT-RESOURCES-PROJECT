import { Component, OnInit } from '@angular/core';
import { ICharacter } from './character';
import {CharacterService} from './characters.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  pageTitle = 'Character details';
  errorMessage = 'Can not retrieve this character';
  character : ICharacter | undefined;

  constructor(private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }

  getCharacterDetails(id: number): void {
    this.characterService.getCharacterbyIdFromServer(id).subscribe({
      next: character => this.character = character,
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void {
    //this.characterId = this.character?.url.split('/')[-1] as number | undefined;
    const param = this.route.snapshot.paramMap.get('id'); // this line allows to get the char id on a local variable called param
    if (param) {
      const id = +param; // the + converts the param (the id retrieved) to a number 
      this.getCharacterDetails(id);
    } 
  }

  onBack(): void {
    this.router.navigate(['/characters']);
  }

}
