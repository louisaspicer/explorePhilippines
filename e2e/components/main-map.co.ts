import {by, element} from "protractor";

export class MainMapComponent {
  appRoot = 'app-main-map';
  map = element(by.css(this.appRoot));

  getMapMarkers() {
    return element.all(by.css(`${this.appRoot} agm-map agm-marker`));
  }
}
