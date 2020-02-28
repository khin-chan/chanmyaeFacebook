import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the SaveCpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-cp',
  templateUrl: 'save-cp.html',
})
export class SaveCpPage {
  receivedCP:any;
  checkImg: boolean = false;
  changedCP:any=[];
  finalCp:any;
  CoverPt:any;
  
  changedPP:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public toast:Toast,public sqlite:SQLite) {
    this.receivedCP=navParams.get("paramCP");
    if (this.receivedCP!= null) {
      this.checkImg = true;
      console.log("Check if img or not=>" + this.checkImg)
    }


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
      this.changedPP = [];
      for(var i=0; i<res.rows.length; i++) {
        // this.myimg = this.pathForImage(res.rows.item(i).img);
        // this.myimage = normalizeURL(this.myimg)
        this.changedPP.push({imgid: res.rows.item(i).imgid, img: res.rows.item(i).img})
        console.log("My photo only one => "+this.changedPP[0].img);
       // console.log("My change data is whether 0 or 1 ===> "+this.mychangeData);
        //this.mychangeData = this.mychangeData;
      }
    }).catch(e => console.log(e));
  })}


  savePhoto() {
    
      this.sqlite.create({
        name: 'myIonicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS myCoverPhoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
          .then(res => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql('INSERT INTO myCoverPhoto VALUES(NULL,?)', [this.receivedCP])
          .then(res => {
            console.log(res);
            this.toast.show('Photo Saved', '5000', 'center').subscribe(
              toast => {
                this.navCtrl.popToRoot();

              }
            );
            // this.navCtrl.push(ProfilePage,{myLastChangedpp:this.img})
          })
           
    })
  }
  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
  }
// //     else if (this.mySavedPhotos.length > 0) {
// //       this.sqlite.create({
// //         name: 'myIonicdb.db',
// //         location: 'default'
// //       }).then((db: SQLiteObject) => {
// //         db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
// //           .then(res => console.log('Executed SQL'))
// //           .catch(e => console.log(e));

// //         db.executeSql('INSERT INTO myphoto VALUES(NULL,?)', [this.saveImgWithID])
// //           .then(res => {
// //             console.log(res);
// //             // this.navCtrl.push(ProfilePage ,{savechangedata: this.savemychangedata})

// //             this.toast.show('Photo Saved', '5000', 'center').subscribe(
// //               toast => {
// //                 this.navCtrl.popToRoot();

// //               }
// //             );

// //           })


// //           .catch(e => {
// //             console.log(e);
// //             this.toast.show(e, '5000', 'center').subscribe(
// //               toast => {
// //                 console.log(toast);
// //               }
// //             );
// //           });

// //       }).catch(e => {
// //         console.log(e);
// //         this.toast.show(e, '5000', 'center').subscribe(
// //           toast => {
// //             console.log(toast);
// //           }
// //         );
// //       });
// //     }

// //   }
 
 


