import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumList } from '../models/album.list';
import { AlbumDetails } from '../models/album.details';

@Injectable({
  providedIn: 'root'
})
export class ITunesService {

  albums: any = null;
  album: any = null;

  constructor(private httpClient: HttpClient) {}

  getAlbums(search: string): Observable<AlbumList> {
    const url = `https://itunes.apple.com/search?term=${search}&entity=album`;

    return this.httpClient.jsonp<AlbumList>(url, 'callback');
  }

  getAlbum(id: number): Observable<AlbumDetails> {
    const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;

    return this.httpClient.jsonp<AlbumDetails>(url, 'callback');
  }

}
