import { Component } from '@angular/core';
import { NavController, normalizeURL, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { ProfilePage } from '../profile/profile';

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
  img: any;
  changeData: boolean = false;
  myLastChangedpp: any = [];
  pp: any;
  savemychangedata: boolean = true;
  cover:any=[];
  checkCover:boolean=false;

  // profile: any;
  // myProfile: any;
  myphotos: any = [];

  mySavedPhotos: any = [];
  IdForSave: number;
  dataWithID: any;
  paramDataWithID: any;
  checkImg: boolean = false;
  saveImgWithID: any;
  cp:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: Toast, public sqlite: SQLite) {
    this.img = navParams.get("image");

    if (this.img != null) {
      this.checkImg = true;
      console.log("Check if img or not=>" + this.checkImg)
    }
    this.IdForSave = navParams.get("paramImg");
    console.log("My profile in save page => " + this.img);
    console.log("Image Id is=>" + this.IdForSave);
  }



  ionViewDidLoad() {
    this.getData();
    this.getCover();
  }

  ionViewWillEnter() {
    this.getData();
    this.getCover();
  }
  getData() {
    this.sqlite.create({
      name: 'myIonicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      // db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
      // .then(res => console.log('Executed SQL'))
      // .catch(e => console.log(e));


      db.executeSql('SELECT * FROM myphoto WHERE imgid=?', [this.IdForSave])
        .then(res => {
          this.mySavedPhotos = [];
          for (var i = 0; i < res.rows.length; i++) {
            // this.myimg = this.pathForImage(res.rows.item(i).img);
            // this.myimage = normalizeURL(this.myimg)
            this.mySavedPhotos.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img })

          }
          this.saveImgWithID = this.mySavedPhotos[0].img;
          console.log("Image with Id Array Length=>" + this.mySavedPhotos.length);
          console.log("this.IdForSave  =>" + this.IdForSave);
          console.log("Check if img or not=>" + this.checkImg);
          console.log("check imgWithID to save=>" + this.saveImgWithID)

        }).catch(e => console.log(e));



    })
  }

  savePhoto() {
    if (this.checkImg==true) {
      this.sqlite.create({
        name: 'myIonicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
          .then(res => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql('INSERT INTO myphoto VALUES(NULL,?)', [this.img])
          .then(res => {
            console.log(res);
            // this.navCtrl.push(ProfilePage ,{savechangedata: this.savemychangedata})

            this.toast.show('Photo Saved', '5000', 'center').subscribe(
              toast => {
                this.navCtrl.popToRoot();

              }
            );
            // this.navCtrl.push(ProfilePage,{myLastChangedpp:this.img})
          })

          .catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });

      }).catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    }
    else if (this.mySavedPhotos.length > 0) {
      this.sqlite.create({
        name: 'myIonicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
          .then(res => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql('INSERT INTO myphoto VALUES(NULL,?)', [this.saveImgWithID])
          .then(res => {
            console.log(res);
            // this.navCtrl.push(ProfilePage ,{savechangedata: this.savemychangedata})

            this.toast.show('Photo Saved', '5000', 'center').subscribe(
              toast => {
                this.navCtrl.popToRoot();

              }
            );

          })


          .catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });

      }).catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    }

  }
  getCover(){
    
   
         
    this.sqlite.create({
      name: 'myIonicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
  
      db.executeSql('CREATE TABLE IF NOT EXISTS myCoverPhoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
      .then(res => console.log('Executed SQL'))
    .catch(e => console.log(e));
  
  
    db.executeSql('SELECT * FROM myCoverPhoto ORDER BY imgid DESC LIMIT 1', {})
    .then(res => {
      this.cover = [];
      for(var i=0; i<res.rows.length; i++) {
        // this.myimg = this.pathForImage(res.rows.item(i).img);
        // this.myimage = normalizeURL(this.myimg)
        this.cover.push({imgid: res.rows.item(i).imgid, img: res.rows.item(i).img})
        console.log("My photo only one => "+this.cover[0].img);
       // console.log("My change data is whether 0 or 1 ===> "+this.mychangeData);
        //this.mychangeData = this.mychangeData;
      }
      this.cp=this.cover[0].img;
  console.log("Now my Cover Photo is =>"+this.cover)
  if(this.cp!=null){
    this.checkCover=true;}
    console.log("check cover true or false=>"+this.checkCover)
    }).catch(e => console.log(e));
  })
  }
  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
}