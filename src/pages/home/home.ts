import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController, Modal, ModalController, ModalOptions, Events } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { GeoLocationPage } from '../geo-location/geo-location';
import { CommentPage } from '../comment/comment';


 
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

  photos = [{image: 'baby5.png', txt: 'Ae Ae', subtxt: '3 mutual friends'},
            {image: 'girl5.png', txt: 'Su Su', subtxt: '2 mutual friends'},
            {image: 'baby2.png', txt: 'Co Co', subtxt: '1 mutual friend'},
            {image: 'baby3.png', txt: 'Chi Chi', subtxt: '5 mutual friends'},
            {image: 'girl5.png', txt: 'Htet Het', subtxt: '4 mutual friends'},
            {image: 'baby7.png', txt: 'Moe Moe', subtxt: '1 mutual friend'} ]

  requests = ['Aye Aye', 'Mya Mya', 'Hla Hla', 'Khin Khin']

  items1 = [{id: 1, like: false}];
  items2 = [{id: 1, like: false}];
  items3 = [{id: 1, like: false}];

  saveProfile = [];
  changed = false;

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    private modal: ModalController,
    private events: Events) {
      this.events.subscribe('save-profile', (savedProfile) =>{
        console.log(JSON.stringify(savedProfile)); // 👋 Hello from page1!
        this.saveProfile = [];
        this.saveProfile = savedProfile;
        this.changed = true;
      });
      
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
  handleLike1(item){
    console.log("Click Like  1=> ");   
    
    item.like = !item.like;
  }
  handleLike2(item){
    console.log("Click Like  2=> ");   
    
    item.like = !item.like;
  }

  handleLike3(item){
    console.log("Click Like  3=> ");   
    
    item.like = !item.like;
  }


}
