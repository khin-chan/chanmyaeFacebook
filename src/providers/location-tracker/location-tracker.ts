import {Injectable, NgZone} from '@angular/core';
import {BackgroundGeolocation, BackgroundGeolocationConfig} from '@ionic-native/background-geolocation';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTrackerProvider {

  public lat;
  public lng;
  public speed: number = 0;
  public timestamp: any = 0;
  public watch: any;
  public x;
  constructor(public Geolocation: Geolocation, public zone: NgZone,
    public backgroundGeolocation: BackgroundGeolocation,
    
  ) {
    this.startTracking();
  }
  startTracking() {
    /*this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => //console.log(acceleration)
      this.x=0,
      (error: any) => console.log(error)
    );
    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      //console.log(acceleration);
    });
*/
    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 5,
      distanceFilter: 10,
      debug: true,
      interval: 1000
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      //console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
//      console.log(this.lat ,      this.lng,      this.speed);

      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
        this.speed = (location.speed * 3600)/1000 ;
        this.timestamp = new Date(location.time);
        // can be speed * 3.6 and should be round for 2 decimal
        
      });

    }, (err) => {
      console.log(err);

    });

    this.backgroundGeolocation.start();

    let options = {
      frequency: 1000,
      enableHighAccuracy: true
    };

    this.watch = this.Geolocation.watchPosition(options).filter((p) => p.coords !== undefined)
    .subscribe((position: Geoposition) => {

      //console.log(position);

      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.speed = position.coords.speed;
        this.timestamp = new Date(position.timestamp);
            });

    });

  }
  stopTracking() {
    console.log('stopTracking');
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();

  }
}
