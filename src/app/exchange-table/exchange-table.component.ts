import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { CurrencyApi } from '../interface/interface'; 

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.scss']
})
export class ExchangeTableComponent implements OnInit {

  rawExchangeTable: any;
  currencyTable: Array<CurrencyApi> = [];

  constructor(private service: ConfigService) {
    this.service.serviceApi().subscribe((res) => {
      this.rawExchangeTable = res;
      this.currencyTable = this.rawExchangeTable[0].rates;
    })
  }

  ngOnInit(): void {
  }

}
