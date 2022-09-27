import { Component } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { CurrencyApi } from '../interface/interface'; 
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  rawExchangeTable: any;
  currencyTable: Array<CurrencyApi> = [];

  date: string = '';
  calcState: number = 0;
  plnRate: number = 1;
  currencyRate: number = 0;
  baseRate: number = 0;
  code: string = '';

  constructor(private service: ConfigService) {
    this.service.serviceApi().subscribe((res) => {
      this.rawExchangeTable = res;
      this.currencyTable = this.rawExchangeTable[0].rates;
      this.date = this.rawExchangeTable[0].effectiveDate;
    })
  }

  showCalculator(rate: number, code: string) {
    this.calcState = 1;
    this.currencyRate = rate;
    this.currencyRate.toFixed(2);
    this.baseRate = rate;
    this.code = code;
    this.plnRate = 1;
  }

  hideCalculator() {
    this.calcState = 0;
  }

  onSetPLN() {
    let calculatedValue: number = this.plnRate/this.baseRate;
    this.currencyRate = parseFloat(calculatedValue.toFixed(2));
  }
  onSetCurrency() {
    let calculatedValue: number = this.currencyRate * this.baseRate;
    this.plnRate = parseFloat(calculatedValue.toFixed(2));
  }
}
