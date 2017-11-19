import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { MARKERS } from '../../models/MARKERS';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {
  zoom = 5;
  lat = 14.1247729;
  lng = 120.9419521;
  markers: Marker[] = [];
  // origin = {latitude: 14.1247729, longitude: 120.9419521};
  // destination = {latitude: 14.0112531, longitude: 120.9976909};

  constructor() { }

  ngOnInit() {
    MARKERS.forEach(marker => {
      this.markers.push(marker);
    });
  }

  clickedMarker(marker: Marker, index: number): null {
    return null;
  }

  addMarker(newMarker: Marker) {
    this.markers.push(newMarker);
  }
}
