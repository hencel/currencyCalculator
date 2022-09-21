import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeTableComponent } from './exchange-table/exchange-table.component';

const routes: Routes = [
  { path: 'first-component', component: ExchangeTableComponent },
  { path: '**', component: ExchangeTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
