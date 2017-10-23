import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {Marker} from "../../../models/marker";
declare const google: any;

@Component({
  selector: 'app-directions-form',
  templateUrl: './directions-form.component.html',
  styleUrls: ['./directions-form.component.css']
})
export class DirectionsFormComponent implements OnInit {

  public startingPointName: string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  @Output() onAddMarker = new EventEmitter<Marker>();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {}

  ngOnInit() {
    this.searchControl = new FormControl();

    // this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ['(regions)'],
        componentRestrictions: {country: 'ph'}
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }

  addMarker() {
    console.log('marker to be added');

    const newMarker: Marker = {
      name: this.startingPointName,
      lat: this.latitude,
      lng: this.longitude,
      draggable: true
    };

    this.onAddMarker.emit(newMarker);
  }

}
