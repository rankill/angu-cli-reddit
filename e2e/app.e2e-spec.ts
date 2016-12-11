import { RedditLatestPostsPage } from './app.po';

describe('reddit-latest-posts App', function() {
  let page: RedditLatestPostsPage;

  beforeEach(() => {
    page = new RedditLatestPostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
