import {browser, by, element, ElementFinder} from "protractor";
import {protractor} from "protractor/built/ptor";

export class DirectionsFormComponent {
  appRoot = 'app-directions-form';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement() {
    return this.rootElement;
  }

  setStartingPoint(startingPoint: string) {
    element(by.className('starting-point-text'))
      .sendKeys(startingPoint).then(function(){
      browser.sleep(500);
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
      browser.sleep(500);
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });
  }

  selectFirstDestinationInList() {
    element.all(by.css('input')).first().click();
  }
}
