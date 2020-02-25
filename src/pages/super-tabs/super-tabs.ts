import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { HomePage } from '../home/home';
import { GroupPage } from '../group/group';
import { WatchPage } from '../watch/watch';
import { ProfilePage } from '../profile/profile';
import { NotificationPage } from '../notification/notification';
import { MenuPage } from '../menu/menu';
 /**
 * Generated class for the SuperTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-super-tabs',
  templateUrl: 'super-tabs.html',
})
export class SuperTabsPage {
  page1: any = HomePage;
  page2: any = GroupPage;
  page3: any = WatchPage;
  page4: any = ProfilePage;
  page5: any = NotificationPage;
  page6: any = MenuPage;
 
  constructor(private superTabsCtrl: SuperTabsController) {}
 
  ngAfterViewInit() {
    // must wait for AfterViewInit if you want to modify the tabs instantly
    this.superTabsCtrl.setBadge('watchTab', 5);
  }
 
  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }
 
  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }
 
  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }
}

