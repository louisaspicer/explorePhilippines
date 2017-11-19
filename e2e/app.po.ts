import { browser, element, by } from 'protractor';
import {MainMapComponent} from './components/main-map.co';
import {DirectionsFormComponent} from './components/directions-form.co';

export class ExplorePhilippinesPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainMap() {
    return new MainMapComponent();
  }

  getDirectionsForm() {
    return new DirectionsFormComponent();
  }

  getHeader() {
    return element(by.css('app-header'));
  }
}
