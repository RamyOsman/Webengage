import { Component } from '@angular/core';

import { Webengage, WebengageUser } from '@awesome-cordova-plugins/webengage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  user = {
    user_id: "1",
    first_name: "Ramy",
    last_name: "Othman",
    email: "ramyothman0@gmail.com",
    phone: "01066082647"
  }


  constructor(public webengage: Webengage, public webengageUser: WebengageUser) {

  }


  // login user
  login() {
    this.webengageUser.login(this.user.user_id).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }


  // set user data
  updateUserData() {
    this.webengageUser.setAttribute('we_first_name', this.user.first_name);
    this.webengageUser.setAttribute('we_last_name', this.user.last_name);
    this.webengageUser.setAttribute('we_email', this.user.email);
    this.webengageUser.setAttribute('we_phone', this.user.phone);
  }


  // logout user
  logout() {
    this.webengageUser.logout().then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }



}
