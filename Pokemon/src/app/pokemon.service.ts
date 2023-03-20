import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{
  private baseURL: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) 
  { }
  ngOnInit(): void {
  }

  searchPokemon(query: string){
    let PokemonObs = this.http.get(this.baseURL + `/pokemon/sandshrew`);
    console.log(PokemonObs)
    return PokemonObs;
  }

  getPokemon(id: string | null) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
    return this.http.get(url);
  }
    }



