import { OnPointPage } from './app.po';

describe('on-point App', () => {
  let page: OnPointPage;

  beforeEach(() => {
    page = new OnPointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
