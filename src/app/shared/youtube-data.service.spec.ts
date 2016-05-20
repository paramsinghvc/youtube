import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { YoutubeDataService } from './youtube-data.service';

describe('YoutubeData Service', () => {
  beforeEachProviders(() => [YoutubeDataService]);

  it('should ...',
      inject([YoutubeDataService], (service: YoutubeDataService) => {
    expect(service).toBeTruthy();
  }));
});
