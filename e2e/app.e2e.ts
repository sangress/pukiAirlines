import { PukiAirlinesPage } from './app.po';

describe('puki-airlines App', function() {
  let page: PukiAirlinesPage;

  beforeEach(() => {
    page = new PukiAirlinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('puki-airlines works!');
  });
});
