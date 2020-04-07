import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rate My Cakes';
  cakes = [];
  newCake = {};
  showCake = [];

  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
    this.getCakesFromService();
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got cakes!", data)
      this.cakes = data['data'];
    });
  }
  
  createCake() {
    console.log('Adding new cake.');
    let observable = this._httpService.postCake(this.newCake);
    observable.subscribe(data => {
      this.newCake = {};
      this.getCakesFromService();
    })
  }

  rateCake(id: string, form) {
    console.log('Rating submitted!');
    let cakeRating = {
      rating: form.controls['rating']['value'],
      comment: form.controls['comment']['value']
    }
    let observable = this._httpService.cakeRate(id, cakeRating);
    observable.subscribe(data => {
      this.getCakesFromService();
    })
  }

  showCakes(cake) {
    console.log('Got all cake data!');
    this.showCake = cake;
  }

}