export class PukiAirlinesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('puki-airlines-app h1')).getText();
  }
}
