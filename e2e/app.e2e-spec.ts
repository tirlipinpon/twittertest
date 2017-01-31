import { TwitterapiPage } from './app.po';

describe('twitterapi App', function() {
  let page: TwitterapiPage;

  beforeEach(() => {
    page = new TwitterapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
