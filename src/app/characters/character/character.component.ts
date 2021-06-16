import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character!: ICharacter;
  id!: number | undefined;

  constructor() {
    console.log("load character:"+this.character);
   }

  ngOnInit(): void {
    this.id = this.character.url.split('/').pop() as number | undefined;
    console.log("id:"+this.id);
  }

}
