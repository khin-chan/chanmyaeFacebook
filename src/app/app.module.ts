import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
import { GroupPage } from '../pages/group/group';
import { WatchPage } from '../pages/watch/watch';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationPage } from '../pages/notification/notification';
import { GeoLocationPage } from '../pages/geo-location/geo-location';
import { SaveProfilePage } from '../pages/save-profile/save-profile';
import { CommentPage } from '../pages/comment/comment';
import { SaveCpPage } from '../pages/save-cp/save-cp';
import { ShowUploadImgPage } from '../pages/show-upload-img/show-upload-img';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WatchListPage } from '../pages/watch-list/watch-list';
import { SuperTabsPage } from '../pages/super-tabs/super-tabs';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import {Geolocation} from "@ionic-native/geolocation";
import {BackgroundGeolocation} from "@ionic-native/background-geolocation";
import { LocationPage } from '../pages/location/location';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,   
    SuperTabsPage,
    GroupPage,
    WatchPage,
    SearchPage,
    MenuPage,
    WatchListPage,
    ProfilePage,
    NotificationPage,
    LocationPage,
    QrcodePage,
    GeoLocationPage,
    SaveProfilePage,
    CommentPage,
    SaveCpPage,
    ShowUploadImgPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    NgxQRCodeModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,  
    SuperTabsPage,
    GroupPage,
    WatchPage,
    SearchPage,
    MenuPage,
    WatchListPage,
    ProfilePage,
    NotificationPage,
    LocationPage,
    QrcodePage,
    GeoLocationPage,
    SaveProfilePage,
    CommentPage,
    SaveCpPage,
    ShowUploadImgPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation,
    BarcodeScanner,
    Camera,
    File,
    SQLite,
    Toast,
  ]
})
export class AppModule {}
