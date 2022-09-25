import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeTableComponent } from './exchange-table/exchange-table.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: 'currency-table', component: ExchangeTableComponent },
  {path: 'calculator', component: CalculatorComponent },
  { path: '**', component: ExchangeTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
