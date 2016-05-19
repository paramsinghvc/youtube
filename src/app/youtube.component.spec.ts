import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { YoutubeAppComponent } from '../app/youtube.component';

beforeEachProviders(() => [YoutubeAppComponent]);

describe('App: Youtube', () => {
  it('should create the app',
      inject([YoutubeAppComponent], (app: YoutubeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'youtube works!\'',
      inject([YoutubeAppComponent], (app: YoutubeAppComponent) => {
    expect(app.title).toEqual('youtube works!');
  }));
});
