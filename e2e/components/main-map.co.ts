import {by, element, ElementFinder} from "protractor";

export class MainMapComponent {
  appRoot = 'app-main-map';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement() {
    return this.rootElement;
  }

  getMapMarkers() {
    return element.all(by.css(`${this.appRoot} agm-map agm-marker`));
  }
}
