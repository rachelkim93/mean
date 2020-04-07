import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      this.getPokemon();
  }
  getPokemon() {
      return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }
  getAbility(url) {
    return this._http.get(url)
  }
}