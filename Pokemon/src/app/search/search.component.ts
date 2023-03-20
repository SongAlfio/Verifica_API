import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  PokemonObs!: Observable<Object>;
  Pokemon: any;

  submit(): void {
    this.PokemonObs = this.Pokemon.pokemonService.searchPokemon();
    console.log(this.PokemonObs)
    this.Pokemon.pokemonService.searchPokemon().subscribe((data: any) => this.PokemonObs = data, console.log(this.PokemonObs));
  }

}
