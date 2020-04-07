import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(private _httpService: HttpService) {}
  ngOnInit(){
    let tempObservable = this._httpService.getPokemon();
    tempObservable.subscribe((data:any) => {
      console.log("got data", data)
      console.log(data.abilities[0].ability.url);
      var abilityUrl = data.abilities[0].ability.url;
      let abilityObservable = this._httpService.getAbility(abilityUrl);
      abilityObservable.subscribe((data) => {
        console.log("this is the ability object");
        console.log("The number of pokemon with this ability is", data['pokemon'].length);
      }
    )}
  }
}