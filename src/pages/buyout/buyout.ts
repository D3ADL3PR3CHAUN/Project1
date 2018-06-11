import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {

  shopData: {name: string, quantity: number}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shopData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
