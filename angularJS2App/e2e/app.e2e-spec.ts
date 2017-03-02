import { AngularJS2AppPage } from './app.po';

describe('angular-js2-app App', () => {
  let page: AngularJS2AppPage;

  beforeEach(() => {
    page = new AngularJS2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
