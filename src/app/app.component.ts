import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Storage } from '@ionic/storage-angular';
register();

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {}

  async ngOnInit () {
    // if using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

  }
}
