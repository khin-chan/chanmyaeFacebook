import { Component, PlatformRef } from '@angular/core';
import { NavController, Platform, ActionSheetController, normalizeURL } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SaveProfilePage } from '../save-profile/save-profile';
import { File } from '@ionic-native/file';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
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
  myphotos: any = [];

  mySavedPhotos: any = [];


  constructor(public navCtrl: NavController,
    public camera: Camera,
    public file: File,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
    public sqlite: SQLite) { }




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
            console.log('Share clicked');
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
          text: 'Select Profile Picture or Video',
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
      this.updateUserImage(imageData);
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
      this.updateUserImage(imageData);
    }, (error) => {
      console.error("Unable to open database", error);
    });
  }

  updateUserImage(imageData) {
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
      //this.navCtrl.push(SaveProfilePage,{image:this.myProfile});

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
  }

  ionViewWillEnter() {
    this.getData();
  }


  // addPhoto(){
  //   this.navCtrl.push(SavePhotoPage);
  // }

  getData() {
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
            this.mySavedPhotos.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img })
          }
        }).catch(e => console.log(e));


      db.executeSql('SELECT * FROM myphoto ORDER BY imgid DESC LIMIT 1', {})
        .then(res => {
          this.myphotos = [];
          for (var i = 0; i < res.rows.length; i++) {
            // this.myimg = this.pathForImage(res.rows.item(i).img);
            // this.myimage = normalizeURL(this.myimg)
            this.myphotos.push({ imgid: res.rows.item(i).imgid, img: res.rows.item(i).img })
            console.log("My photo only one => " + this.myphotos);
          }
        }).catch(e => console.log(e));
    })
  }


}



