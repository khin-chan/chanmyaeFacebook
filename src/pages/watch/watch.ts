import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Modal, ModalController, ModalOptions,} from 'ionic-angular';
import { WatchListPage } from '../watch-list/watch-list';
import { SearchPage } from '../search/search';
import { CommentPage } from '../comment/comment';


/**
 * Generated class for the WatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})


export class WatchPage {

  items1 = [{ id: 1, like: false }];
  items2 = [{ id: 1, like: false }];
  items3 = [{ id: 1, like: false }];





  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  alert() {
    const actionSheet = this.actionSheetCtrl.create({

      buttons: [

        {
          icon: 'ios-bookmark-outline',
          text: 'Save post',

          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },

        {
          icon: 'ios-help-circle-outline',
          text: 'Find Support or Report Post',
        },


        {
          icon: 'ios-notifications-outline',
          text: 'Turn on notifications for this post',
        },

        {
          icon: 'ios-link-outline',
          text: 'Copy Link',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  watchlist() {
    this.navCtrl.push(WatchListPage);
  }

  search() {
    this.navCtrl.push(SearchPage);
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


