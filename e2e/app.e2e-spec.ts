import { ExplorePhilippinesPage } from './app.po';

describe('explore-philippines App', () => {
  let page: ExplorePhilippinesPage;

  beforeAll(() => {
    page = new ExplorePhilippinesPage();
    page.navigateTo();
  });

  it('should show the main map', () => {
    expect(page.getMainMap().getRootElement().isPresent()).toBe(true);
  });

  it('should show the header', () => {
    expect(page.getHeader().isPresent()).toBe(true);
  });

  it('should show a directions form', () => {
    expect(page.getDirectionsForm().getRootElement().isPresent()).toBe(true);
  });
});
