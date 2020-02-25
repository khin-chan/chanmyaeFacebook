import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  constructor(
    public navCtrl: NavController,
    public locationTracker: LocationTrackerProvider
  ) {

  }

  public start() {
    this.locationTracker.startTracking();
  }

  public stop() {
    this.locationTracker.stopTracking();
  }

}
