import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  constructor(private navParams: NavParams,
              private view: ViewController) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log("What data => "+JSON.stringify(data));
  }
  closeModal(){    
    const data = {
      name: 'Comment Page',
      type: 'love comment'
    };
    this.view.dismiss(data);
  }

}
