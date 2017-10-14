import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent {
  title = 'Explore Philippines';
  lat = 14.1247729;
  lng  = 120.9419521;

  constructor() { }
}
