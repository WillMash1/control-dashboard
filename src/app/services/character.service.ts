import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterModel } from '../models/CharacterModel';
import { PostCharacterDTO } from '../components/dtos/PostCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    // const res = await fetch('http://localhost:5054/api/character/GetAll');
    return this.http.get<any>(
      `http://localhost:5054/api/character/GetAll`
    )
  }

  getSingleCharacter(id: number): Observable<any> {
    // const res = await fetch('http://localhost:5054/api/character/GetAll');
    return this.http.get<any>(
      `http://localhost:5054/api/character/${id}`
    )
  }

  postCharacter(character: PostCharacterDTO): Observable<any> {
    // const res = await fetch('http://localhost:5054/api/character/GetAll');
    
    return this.http.post<any>(
      `http://localhost:5054/api/character`,
      character
    )
  }
  deleteCharacter(id: number): Observable<any> {
    // const res = await fetch('http://localhost:5054/api/character/GetAll');
    
    return this.http.delete<any>(
      `http://localhost:5054/api/character/${id}`
    )
  }
}
