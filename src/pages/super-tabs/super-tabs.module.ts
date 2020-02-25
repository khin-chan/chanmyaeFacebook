import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsPage } from './super-tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    SuperTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SuperTabsPage),
    SuperTabsModule
  ],
})
export class SuperTabsPageModule {}
