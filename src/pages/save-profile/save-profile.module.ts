import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveProfilePage } from './save-profile';

@NgModule({
  declarations: [
    SaveProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SaveProfilePage),
  ],
})
export class SaveProfilePageModule {}
