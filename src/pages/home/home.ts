import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { GeoLocationPage } from '../geo-location/geo-location';


 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images = [{image: 'dbcolor1.jpg', txt: 'Dee Dee'},
            {image:'baby5.png', txt: 'Ae Ae'},
            {image:'lbcolor1.jpg',  txt: 'Barbie'},
            {image:'lbcolor2.jpg',  txt: 'Bee Bee'},
            {image:'dbcolor1.jpg',  txt: 'Dar Dar'},
            {image:'baby6.png', txt: 'Tuu Tuu'}]

  photos = [{image: 'girl4.png', txt: 'Ae Ae', subtxt: '3 mutual friends'},
            {image: 'girl5.png', txt: 'Su Su', subtxt: '2 mutual friends'},
            {image: 'girl6.png', txt: 'Co Co', subtxt: '1 mutual friend'},
            {image: 'girl4.png', txt: 'Chi Chi', subtxt: '5 mutual friends'},
            {image: 'girl5.png', txt: 'Htet Het', subtxt: '4 mutual friends'},
            {image: 'girl6.png', txt: 'Moe Moe', subtxt: '1 mutual friend'} ]

  requests = ['Aye Aye', 'Mya Mya', 'Hla Hla', 'Khin Khin']

  items = [{id: 1, like: false}]

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController) {
      
  }

  openBackgroundGeolocation(){
    this.navCtrl.push(GeoLocationPage);
  }

  openSearch(){
    this.navCtrl.push(SearchPage);
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
   
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Save Post',        
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-bookmark-outline' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Hide Post',
          icon: !this.platform.is('ios') ? 'ios-backspace-outline' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Snooze "" for 30 days',
          icon: !this.platform.is('ios') ? 'ios-clock-outline' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Unfollow ""',
          icon: !this.platform.is('ios') ? 'ios-close-circle-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Why am I seeing this post?',
          
          icon: !this.platform.is('ios') ? 'ios-information-circle-outline' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Find Support or Report Post',
         
          icon: !this.platform.is('ios') ? 'ios-alert-outline' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Turn on notifications for this post',
         
          icon: !this.platform.is('ios') ? 'ios-notifications-outline' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'View edit history',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'ios-create-outline' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  handleLike(item){
    console.log("Click Like   => ");   
    
    item.like = !item.like;
  }

}
