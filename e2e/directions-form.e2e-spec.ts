import {ExplorePhilippinesPage} from './app.po';
import {DirectionsFormComponent} from './components/directions-form.co';
import {promise} from 'selenium-webdriver';
import {browser} from "protractor";

describe('Directions Form', () => {

  let page: ExplorePhilippinesPage;
  let directionsForm: DirectionsFormComponent;

  beforeEach(() => {
    page = new ExplorePhilippinesPage();
    page.navigateTo();
    directionsForm = page.getDirectionsForm();
  });

  it('should allow user to add a starting point marker to map', () => {
    const originalNumberOfMarkers: promise.Promise<number> = page.getMainMap().getMapMarkers()
      .then(items => { return items.length; });
    expect(originalNumberOfMarkers).toEqual(7);

    directionsForm.setStartingPoint('Manila');

    const updatedNumberOfMarkers: promise.Promise<number> = page.getMainMap().getMapMarkers()
      .then(items => { return items.length; });
    expect(updatedNumberOfMarkers).toEqual(8);
  });

  it('should allow user to select a destination for directions', () => {
    const originalNumberOfMarkers: promise.Promise<number> = page.getMainMap().getMapMarkers()
      .then(items => { return items.length; });
    expect(originalNumberOfMarkers).toEqual(7);

    directionsForm.selectFirstDestinationInList();
    browser.sleep(5000);

    const originAndDestinationNumberOfMarkers: promise.Promise<number> = page.getMainMap().getMapMarkers()
      .then(items => { return items.length; });
    expect(originAndDestinationNumberOfMarkers).toEqual(2);
  });
});
