import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { GroupPage } from '../group/group';
import { WatchPage } from '../watch/watch';
import { MenuPage } from '../menu/menu';
import { ProfilePage } from '../profile/profile';
import { NotificationPage } from '../notification/notification';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GroupPage;
  tab3Root = WatchPage;
  tab4Root = ProfilePage;
  tab5Root = NotificationPage;
  tab6Root = MenuPage;

  constructor() {

  }
}
