export class YoutubePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('youtube-app h1')).getText();
  }
}
