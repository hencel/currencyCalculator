import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currencyCalculator';
  tableAAddress: string = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
  rawExchangeTable: any;

  constructor(private service: ConfigService) {
    this.service.serviceApi(this.tableAAddress).subscribe((res) => {
      console.log(res);
      this.rawExchangeTable = res;
      console.log(this.rawExchangeTable[0]);
    })
  }
}
