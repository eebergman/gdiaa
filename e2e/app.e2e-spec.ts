import { GdiwebsitePage } from './app.po';

describe('gdiwebsite App', () => {
  let page: GdiwebsitePage;

  beforeEach(() => {
    page = new GdiwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
