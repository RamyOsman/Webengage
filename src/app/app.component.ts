import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Webengage } from '@awesome-cordova-plugins/webengage/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public platform: Platform, public webengage: Webengage) {
    this.initApp()
  }


  initApp() {
    this.platform.ready().then(() => {
      // initialize webengage
      this.webengage.engage()
      console.log(this.webengage)
    })
  }



}