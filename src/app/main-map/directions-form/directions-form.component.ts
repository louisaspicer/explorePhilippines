import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Marker } from '../../../models/marker';
import { MARKERS } from '../../../models/MARKERS';
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
  public setMarkers: Marker[] = MARKERS;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @Output() onAddMarker = new EventEmitter<Marker>();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {}

  ngOnInit() {
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(regions)'],
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
          this.startingPointName = place.name;
          this.zoom = 12;
        });
      });
    });
  }

  addMarker() {
    console.log('marker to be added');

    const newMarker: Marker = {
      name: this.startingPointName,
      lat: this.latitude,
      lng: this.longitude,
      draggable: true,
      isSelected: false
    };

    console.log("NEW MARKER NAME:", newMarker.name);

    this.onAddMarker.emit(newMarker);
  }

  //emit a selected destination to the main map for the directions directive

}
