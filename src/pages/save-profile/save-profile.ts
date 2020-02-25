import { Component } from '@angular/core';
import { NavController, normalizeURL,NavParams } from 'ionic-angular';

//  * Generated class for the SaveProfilePage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */


@Component({
  selector: 'page-save-profile',
  templateUrl: 'save-profile.html',
})
export class SaveProfilePage {
  img:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img=navParams.get("image");
    console.log("My profile in save page => "+this.img);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveProfilePage');
  }
  

}
