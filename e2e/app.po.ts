import { browser, element, by } from 'protractor';
import {MainMapComponent} from "./components/main-map.co";

export class ExplorePhilippinesPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainMap() {
    return new MainMapComponent();
  }

  getHeader() {
    return element(by.css('app-header'));
  }
}
