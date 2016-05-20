import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {SearchResult} from './search-result.model';

describe('SearchResult', () => {
  it('should create an instance', () => {
    expect(new SearchResult()).toBeTruthy();
  });
});
