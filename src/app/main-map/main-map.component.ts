import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent {
  title = 'Pick your destination:';
  zoom = 6;
  lat = 14.1247729;
  lng = 120.9419521;
  markers: Marker[] = [
    {
      name: 'Nurture Wellness Village, Tagaytay',
      lat: 14.1247729,
      lng: 120.9419521,
      draggable: false
    },
    {
      name: 'Taal Volcano',
      lat: 14.0112531,
      lng : 120.9976909,
      draggable: false
    },
    {
      name: 'Naked Island, Siargao',
      lat: 9.734760099999999,
      lng: 126.1261071,
      draggable: false
    },
    {
      name: 'Apo Island, Cebu',
      lat : 9.079721300000001,
      lng : 123.2714292,
      draggable: false
    },
    {
      name: 'Coron, Palawan',
      lat : 12.0499255,
      lng : 120.1781748,
      draggable: false
    },
    {
      name: 'Underground River, Palawan',
      lat : 10.1925595,
      lng : 118.9265829,
      draggable: false
    },
    {
      name: 'Bagiuo, Luzon',
      lat : 16.4023332,
      lng : 120.5960071,
      draggable: false
    },
  ];

  constructor() { }

  clickedMarker(marker: Marker, index: number): null {
    return null;
  }
}

interface Marker {
    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;
}
