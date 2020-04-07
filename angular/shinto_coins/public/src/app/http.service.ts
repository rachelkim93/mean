import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  balance = {value: 1, number: 0};
  transactions = [];
  random_num = 0;
  constructor() { }


  increaseNumber(){
    this.balance.number += 1;
  }
  decreaseNumber(){
    this.balance.number -= 1;
  }
  increaseValue(){
    this.balance.value += 1;
  }
  decreaseValue(){
    this.balance.value -= 1;
  }
  addTransaction(action, amount, value){
    this.random_num = Math.floor(Math.random()*1000 + 1);
    this.transactions.push({action: action, amount: amount, value: value, id: this.random_num});
  }
  mine(){
    this.increaseValue();
    this.increaseNumber();
    this.addTransaction('Mined', 1, this.balance.value);
    return this.balance;
  }
  buy(){
    this.increaseValue();
    this.increaseNumber();
    this.addTransaction('Bought', 1, this.balance.value);
    return this.balance;
  }
  sell(){
    if (this.balance.number >= 1){
      this.decreaseValue();
      this.decreaseNumber();
      this.addTransaction('Sold', 1, this.balance.value);
    return this.balance;
    }
  }
  getTransactions(){
    return this.transactions;
  }
  getTransaction(id){
    var result = this.transactions.filter(function(obj) {
      return obj.id == id;
    });
  }
}