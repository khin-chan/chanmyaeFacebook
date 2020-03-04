import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController, normalizeURL, NavParams,Events, Modal, ModalController, ModalOptions} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SaveProfilePage } from '../save-profile/save-profile';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { ShowUploadImgPage } from '../show-upload-img/show-upload-img';
import { SaveCpPage } from '../save-cp/save-cp';
import { CommentPage } from '../comment/comment';

// /**


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  //   myphoto="assets/imgs/profile.png";
  //  myPath="assets/imgs/profile.png";
  changeData: boolean = false;
  profile: any;
  myProfile: any;
  mySavedPhotos: any = [];
  mySavedImgs: any = [];
  changedPP: any = [];
  mychangeData: boolean;
  CP: any;
  myCP: any;
  image: any;
  paramCP: any;
  changedCP: any = [];
  cover: any;
  checkCover: boolean = false;

  items1 = [{ id: 1, like: false }];
  items2 = [{ id: 1, like: false }];
  items3 = [{ id: 1, like: false }];
  items4 = [{ id: 1, like: false }];
  items5 = [{ id: 1, like: false }];
  imgs: string;
  tet: string;
  Datas = [
    {imgs: 'people1.jpg', tet: 'Chow Lwin'},
    {imgs:'people2.jpg', tet:'Kay Kay'},
    {imgs: 'people3.jpg', tet: 'Chan Myae Han'}
  ];

  imgs1: string;
  tet1: string;
  Datas1 = [
    {imgs1: 'people4.jpg', tet1: 'Kine Myae'},
    {imgs1:'people5.jpg', tet1:'Zin Mar Nwe'},
    {imgs1: 'cat1.jpg', tet1: 'May Zan'}
  ];





  constructor(public navCtrl: NavController,
    public camera: Camera,
    public file: File, public actionsheetCtrl: ActionSheetController, public navParams: NavParams, public platform: Platform, public toast: Toast, public sqlite: SQLite,
    public events:Events,
    private modal: ModalController) { //this.mychangeData=0;
    //this.mychangeData=navParams.get("savechangedata");
    // this.cover = navParams.get("CoverPt");

  }

  //    this.changedPP=navParams.get("myLastChangedpp");
  //    //navParams.get("myLastChangedpp");
  // console.log("My profile in save page => "+this.changedPP);}
  // //public webview: WebView,
  //private win: Window



  actionHome() {
    let actionSheet = this.actionsheetCtrl.create({

      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Save post',

          role: 'destructive',
          icon: !this.platform.is('ios') ? 'bookmark' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Edit Post',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Edit Privacy',
          icon: !this.platform.is('ios') ? 'lock' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Hide From timeline',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Turn off notifications for this post',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'notifications' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  coverPhoto() {
    let actionSheet1 = this.actionsheetCtrl.create({

      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'View Profile Cover',

          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-image-outline' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Upload Photo',
          icon: !this.platform.is('ios') ? 'arrow-up' : null,
          handler: () => {
            this.uploadCP();
            console.log('go to function');
          }
        },
        {
          text: 'Select Photo on Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {

            console.log('Play clicked');
          }
        },
        {
          text: 'Create Cover Collage',
          icon: !this.platform.is('ios') ? 'grid' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Select Artwork',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'brush' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet1.present();
  }

  uploadImg() {
    let actionSheet1 = this.actionsheetCtrl.create({

      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'View Profile Picture',

          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-image-outline' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Select Profile Picture or Video from Gallery',
          icon: !this.platform.is('ios') ? 'arrow-up' : null,
          handler: () => {
            this.goGallery();
            console.log('Success');
          }
        },
        {
          text: 'Take a new photo',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            this.goCamera();
            console.log('Play clicked');
          }
        },
        {
          text: 'Select Profile Picture or Video from Uploads',
          icon: !this.platform.is('ios') ? 'grid' : null,
          handler: () => {
            this.showUploads();
            console.log('Go showUploads');
          }
        },
        {
          text: 'Select Artwork',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'brush' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet1.present();
  }

  //private win: any = window; 


  goGallery() {
    console.log('Photo gallery');
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.mychangeData = true;
      this.updateUsreImage(imageData);
      console.log("Fucking Change in Gallery ==> " + this.mychangeData);
      // If it's base64:
    }, (error) => {
      console.error("Unable to open database", error);
    });
  }

  goCamera() {
    console.log('Camera');
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('Camera success');
      this.mychangeData = true;
      this.updateUsreImage(imageData);
      console.log("Fucking Change in Camera ==> " + this.mychangeData);
    }, (error) => {
      console.error("Unable to open database", error);
    });
  }



  updateUsreImage(imageData) {
    //  this.isLoading = true;
    let currentName = '';
    let correctPath = '';
    if (imageData.indexOf('file:///') > -1) {
      if (imageData.indexOf('?') > -1) {
        currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
        correctPath = imageData.substring(0, imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
      }
      else {
        currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
      }
    }
    else {
      if (imageData.indexOf('?') > -1) {
        currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
        correctPath = 'file:///' + imageData.substring(0, imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
      }
      else {
        currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        correctPath = 'file:///' + imageData.substr(0, imageData.lastIndexOf('/') + 1);
      }
    }

    console.log("currentName == " + currentName);
    console.log("currentPath == " + correctPath);
    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    this.changeData = true;
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {

    console.log("namePaht == " + namePath + "   //// currentNmae == " + currentName + "   ////  newFileName == " + newFileName);
    console.log("this.file.datadirectory == " + this.file.dataDirectory);
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      // this.photos[0] = newFileName;
      this.profile = this.pathForImage(newFileName);
      //this.myProfile = this.webview.convertFileSrc(this.profile);
      //this.myProfile = this.win.Ionic.WebView.convertFileSrc(this.profile);
      // this.myProfile = window['Ionic']['WebView'].convertFileSrc(this.profile);
      this.myProfile = normalizeURL(this.profile);
      this.navCtrl.push(SaveProfilePage, { image: this.myProfile });

      console.log("photos=" + JSON.stringify(this.profile));
      console.log("myProfiles=" + JSON.stringify(this.myProfile));
    }, error => {
      alert('Error while storing file.' + JSON.stringify(error));
    });
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      // newFileName = n + ".jpg";
      newFileName = n + ".jpg";
    return newFileName;
  }

  ionViewDidLoad() {
    this.getData();
    this.getCP();
  }

  ionViewWillEnter() {
    this.getData();
    this.getCP();
  }

  getData() {
    this.sqlite.create({
      name: 'myIonicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {




      db.executeSql('SELECT * FROM myphoto ORDER BY imgid DESC LIMIT 1', {})
        .then(res => {
          this.changedPP = [];
          for (var i = 0; i < res.rows.length; i++) {
            // this.myimg = this.pathForImage(res.rows.item(i).img);
            // this.myimage = normalizeURL(this.myimg)
            this.changedPP.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img })
            console.log("My photo only one => " + this.changedPP);
           
            // console.log("My change data is whether 0 or 1 ===> "+this.mychangeData);
            //this.mychangeData = this.mychangeData;
          }
          this.events.publish('publishedImg',this.changedPP);
          
        }).catch(e => console.log(e));
    })
  }

  saveChange() {
    this.mychangeData = true;
    console.log("this mychangeData ==> " + this.mychangeData);
  }

  showUploads() {
    this.sqlite.create({
      name: 'myIonicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      db.executeSql('CREATE TABLE IF NOT EXISTS myphoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));





      db.executeSql('SELECT * FROM myphoto', {})
        .then(res => {
          this.mySavedPhotos = [];
          for (var i = 0; i < res.rows.length; i++) {
            // this.myimg = this.pathForImage(res.rows.item(i).img);
            // this.myimage = normalizeURL(this.myimg)
            this.mySavedPhotos.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img });
            console.log("My profile in save page => " + this.mySavedPhotos);

          }
          console.log("selected photos");
          this.navCtrl.push(ShowUploadImgPage, { mySavedImgs: this.mySavedPhotos })

        }).catch(e => console.log(e));
    })


  }
  uploadCP() {
    console.log('Photo gallery');
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {

      this.updateUsreImageCP(imageData);
      console.log("Fucking Change in Gallery ==> " + this.mychangeData);
      // If it's base64:
    }, (error) => {
      console.error("Unable to open database", error);
    });

  }
  updateUsreImageCP(imageData) {
    //  this.isLoading = true;
    let currentName = '';
    let correctPath = '';
    if (imageData.indexOf('file:///') > -1) {
      if (imageData.indexOf('?') > -1) {
        currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
        correctPath = imageData.substring(0, imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
      }
      else {
        currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
      }
    }
    else {
      if (imageData.indexOf('?') > -1) {
        currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
        correctPath = 'file:///' + imageData.substring(0, imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
      }
      else {
        currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        correctPath = 'file:///' + imageData.substr(0, imageData.lastIndexOf('/') + 1);
      }
    }

    console.log("currentName == " + currentName);
    console.log("currentPath == " + correctPath);
    this.copyFileToLocalDirCP(correctPath, currentName, this.createFileNameCP());

  }

  private copyFileToLocalDirCP(namePath, currentName, newFileName) {

    console.log("namePaht == " + namePath + "   //// currentNmae == " + currentName + "   ////  newFileName == " + newFileName);
    console.log("this.file.datadirectory == " + this.file.dataDirectory);
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      // this.photos[0] = newFileName;
      this.CP = this.pathForImageCP(newFileName);
      //this.myProfile = this.webview.convertFileSrc(this.profile);
      //this.myProfile = this.win.Ionic.WebView.convertFileSrc(this.profile);
      // this.myProfile = window['Ionic']['WebView'].convertFileSrc(this.profile);
      this.myCP = normalizeURL(this.CP);
      console.log("my Cover Photo is =>" + this.myCP)
      this.navCtrl.push(SaveCpPage, { paramCP: this.myCP });

      console.log("photos=" + JSON.stringify(this.profile));
      console.log("myProfiles=" + JSON.stringify(this.myProfile));
    }, error => {
      alert('Error while storing file.' + JSON.stringify(error));
    });
  }

  public pathForImageCP(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  private createFileNameCP() {
    var d = new Date(),
      n = d.getTime(),
      // newFileName = n + ".jpg";
      newFileName = n + ".jpg";
    return newFileName;
  }
  getCP() {
    this.sqlite.create({
      name: 'myIonicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {


      this.sqlite.create({
        name: 'myIonicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS myCoverPhoto(imgid INTEGER PRIMARY KEY,img TEXT)', {})
          .then(res => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql('SELECT * FROM myCoverPhoto ORDER BY imgid DESC LIMIT 1', {})
          .then(res => {
            this.changedCP = [];
            for (var i = 0; i < res.rows.length; i++) {
              // this.myimg = this.pathForImage(res.rows.item(i).img);
              // this.myimage = normalizeURL(this.myimg)
              this.changedCP.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img })
              console.log("My final cover photo in SaveCP Page is => " + this.changedCP[0].img);

              // console.log("My change data is whether 0 or 1 ===> "+this.mychangeData);
              //this.mychangeData = this.mychangeData;
            } this.cover = this.changedCP[0].img;
            console.log("Now my Cover Photo is =>" + this.cover)
            if (this.cover != null) {
              this.checkCover = true;
            }
            console.log("check cover true or false=>" + this.checkCover)
          }
          )
      })
    })

  }
  handleLike1(item) {
    console.log("Click Like  1=> ");

    item.like = !item.like;
  }
  handleLike2(item) {
    console.log("Click Like  2=> ");

    item.like = !item.like;
  }

  handleLike3(item) {
    console.log("Click Like  3=> ");

    item.like = !item.like;
  }
  handleLike4(item) {
    console.log("Click Like  4=> ");

    item.like = !item.like;
  }

  handleLike5(item) {
    console.log("Click Like  5=> ");

    item.like = !item.like;
  }
  openModal(){

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const myData = {
      name: 'Chan Myae Home',
      role: 'Developer'
    };
    const myModal : Modal = this.modal.create(CommentPage, { data: myData}, myModalOptions);
    myModal.present();

    myModal.onDidDismiss((data)=>{
      console.log("I'm about Dimissed");
      console.log(data);
    })

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    })

    console.log("My Comment Modal");
  }
}

// this.navCtrl.push(ProfilePage ,{savechangedata: this.savemychangedata})















