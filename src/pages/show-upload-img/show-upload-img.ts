import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaveProfilePage } from '../save-profile/save-profile';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ShowUploadImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-upload-img',
  templateUrl: 'show-upload-img.html',
})
export class ShowUploadImgPage {
  Imgs: any = [];
  id1:number;
  paramImg:number;
  ImgsFromID:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toast:Toast,public sqlite:SQLite) {
    this.Imgs=navParams.get("mySavedImgs");
    console.log("My profile in save page => "+this.Imgs);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowUploadImgPage');
  }
    // this.sqlite.create({
    //   name: 'myIonicdb.db',
    //   location: 'default'
    // }).then((db: SQLiteObject) => {
    // //   db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
    // //   .then(res => console.log('Executed SQL'))
    // // .catch(e => console.log(e));
      
    // db.executeSql('SELECT * FROM myphoto where imgid=this.id', {})
    // .then(res => {
    //   this.ImgsFromID = [];
    //   for(var i=0; i<res.rows.length; i++) {
    //     // this.myimg = this.pathForImage(res.rows.item(i).img);
    //     // this.myimage = normalizeURL(this.myimg)
    //     this.ImgsFromID.push({imgid: res.rows.item(i).imgid,img: res.rows.item(i).img});
  goToPropic(id:number){
              this.id1=id;
        this.navCtrl.push(SaveProfilePage,{paramImg:this.id1})
    //   }
    // }).catch(e => console.log(e));


    // })}
      }}
