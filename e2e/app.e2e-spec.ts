import { GdiwebsitePage } from './app.po';
const expect = global['chai'].expect;

describe('gdiwebsite App', () => {
  let page: GdiwebsitePage;

  beforeEach(() => {
    page = new GdiwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).to.equal('app works!');
  });
});
