import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  public production: string;
  public serverUrl: string;
  public env: string;

  constructor() {}

  ngOnInit() {

    console.log(environment.production);
    console.log(environment.NG_APP_SERVER_URL);

    this.production = environment.production;
    this.serverUrl = environment.NG_APP_SERVER_URL;
    this.env = environment.env;

  }

  
}
