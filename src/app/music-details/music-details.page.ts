import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as MusicActions from '../state/music/music.actions';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { getAlbum } from '../state/music/music.reducer';
import { AlbumDetails } from '../models/album.details';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.page.html',
  styleUrls: ['./music-details.page.scss'],
})
export class MusicDetailsPage implements OnInit, OnDestroy {

  album$: Observable<Album>;
  
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.album$ = this.store.select(getAlbum);
  }

  ngOnInit() {
    this.store.dispatch(new MusicActions.GetAlbum(Number(this.route.snapshot.paramMap.get('id'))));
  }

  ngOnDestroy() {
    this.store.dispatch(new MusicActions.GetAlbumSuccess(new AlbumDetails()));
  }
}
