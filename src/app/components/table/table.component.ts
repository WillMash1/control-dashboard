import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [CharacterService]

})
export class TableComponent {
  res: any;
  constructor(private characterService: CharacterService) {
   const res = this.characterService.getAllCharacters().subscribe((res) => {
    console.log('RES', res)
    this.res = res;
   })
   ;
  }

  

}
