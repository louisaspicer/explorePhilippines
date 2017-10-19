import {ExplorePhilippinesPage} from "./app.po";

describe('Main Map', () => {

  let page: ExplorePhilippinesPage;

  beforeAll(() => {
    page = new ExplorePhilippinesPage();
    page.navigateTo();
  });

  it('should show at least one marker', () => {
    const markers = page.getMainMap().getMapMarkers();
    expect(markers.count()).toBeGreaterThanOrEqual(1);
  });
});
