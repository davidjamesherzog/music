import { TestBed } from '@angular/core/testing';

import { ITunesService } from './itunes.service';
import { HttpClient } from '@angular/common/http';

describe('ItunesService', () => {
  let httpClient: HttpClient;
  let service: ITunesService;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('httpClient', ['jsonp']);
    service = new ITunesService(httpClient);
  });

  it('should call getAlbums', () => {
    service.getAlbums('Metallica');
    expect(httpClient.jsonp).toHaveBeenCalledWith(
      'https://itunes.apple.com/search?term=Metallica&entity=album',
      'callback'
    );
  });

  it('should call getAlbum', () => {
    service.getAlbum(1);
    expect(httpClient.jsonp).toHaveBeenCalledWith(
      'https://itunes.apple.com/lookup?id=1&entity=song',
      'callback'
    );
  });
});
