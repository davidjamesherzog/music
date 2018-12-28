import { TestBed } from '@angular/core/testing';

import { ITunesService } from './itunes.service';

describe('ItunesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ITunesService = TestBed.get(ITunesService);
    expect(service).toBeTruthy();
  });
});
