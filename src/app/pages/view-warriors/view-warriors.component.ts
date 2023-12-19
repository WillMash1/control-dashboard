import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CharacterService } from '../../services/character.service';

@Component({
    selector: 'app-view-warriors',
    standalone: true,
    templateUrl: './view-warriors.component.html',
    styleUrl: './view-warriors.component.scss',
    imports: [TableComponent, NavbarComponent],
    providers: [CharacterService],


})
export class ViewWarriorsComponent {
    res: any;
    constructor(private characterService: CharacterService) {
     const res = this.characterService.getAllCharacters().subscribe((res) => {
      console.log('RES', res)
      this.res = res;
     });

     
    
    }


    addCharacterToDb() {
        // Testing post function
            const character = {
                "name": 'Henry',
                "hitPoints": 10,
                "strength": 10,
                "defense": 15,
                "intelligence": 10,
                "class": 0
            }
            this.characterService.postCharacter(character).subscribe(res => {
                console.log('Post RES', res)
            });
            console.log('ADD character called')
    }

    // ngOnInit() {
    //     this.characterService.getSingleCharacter(1).subscribe(res => {
    //         console.log('Post RES', res)
    //      });
    // }

}
