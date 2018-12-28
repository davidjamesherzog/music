import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Jsonp} from '@angular/http';
import { map } from 'rxjs/operators';
import {Type} from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class ITunesService {

  albums: any = null;
  album: any = null;

  constructor(public http: Http, public jsonp: Jsonp) {}

  getAlbums(search: string) {

    const url: string = `https://itunes.apple.com/search?term=${search}&entity=album&callback=JSONP_CALLBACK`;

    // don't have the users yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.jsonp.get(url)
        .pipe(map(res => <Array<Type>>(res.json())))
        .subscribe(albums => {
          this.albums = albums;
          resolve(this.albums);
        });
    });
  }

  getAlbum(id: number) {

    const url: string = `https://itunes.apple.com/lookup?id=${id}&entity=song&callback=JSONP_CALLBACK`;

    // don't have the users yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.jsonp.get(url)
        .pipe(map(res => <Array<Type>>(res.json())))
        .subscribe(album => {
          this.album = album;
          resolve(this.album);
        });
    });
  }

}
