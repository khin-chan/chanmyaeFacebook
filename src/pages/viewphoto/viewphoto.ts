import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the ViewphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewphoto',
  templateUrl: 'viewphoto.html',
})
export class ViewphotoPage {
  
  receivedPP:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public sqlite:SQLite) {
    // this.receivedPP=navParams.get("viewPP");
    // console.log("Photo of ViewPhoto Page=>"+this.receivedPP[0].img)

  }

  ionViewDidLoad() {
    this.getData();
    
  }

  ionViewWillEnter() {
    this.getData();
    
  }
  getData(){
    this.sqlite.create({
      name: 'myIonicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('SELECT * FROM myphoto ORDER BY imgid DESC LIMIT 1', {})
        .then(res => {
          this.receivedPP = [];
          for (var i = 0; i < res.rows.length; i++) {
            // this.myimg = this.pathForImage(res.rows.item(i).img);
            // this.myimage = normalizeURL(this.myimg)
            this.receivedPP.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img })
            console.log("My photo in ViewPhoto Page is => " + this.receivedPP[0].img);

  }
});
    })}
    

    backtoProfile(){
      this.navCtrl.push(ProfilePage);
    }
}
  
  