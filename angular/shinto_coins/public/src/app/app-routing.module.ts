import { HomeComponent } from './home/home.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'mine-coins',component: MineCoinsComponent },
  { path: 'buy-coins',component: BuyCoinsComponent },
  { path: 'sell-coins',component: SellCoinsComponent },
  { path: 'browse-ledger',component: BrowseLedgerComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: '/PagenotfoundComponent' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }