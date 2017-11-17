import { browser, element, by } from 'protractor';
import {MainMapComponent} from "./components/main-map.co";
import {DirectionsFormComponent} from "../src/app/main-map/directions-form/directions-form.component";

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

  getDirectionsForm() {
    return new DirectionsFormComponent();
  }
}
