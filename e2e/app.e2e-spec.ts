import { AngularJS2Page } from './app.po';

describe('angular-js2 App', () => {
  let page: AngularJS2Page;

  beforeEach(() => {
    page = new AngularJS2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
