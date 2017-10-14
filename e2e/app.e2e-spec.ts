import { ExplorePhilippinesPage } from './app.po';

describe('explore-philippines App', () => {
  let page: ExplorePhilippinesPage;

  beforeEach(() => {
    page = new ExplorePhilippinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
