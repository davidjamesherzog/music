import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as fromAlbum from '../state/music/music.actions';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { getAlbum } from '../state/music/music.reducer';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.page.html',
  styleUrls: ['./music-details.page.scss'],
})
export class MusicDetailsPage implements OnInit {

  album$: Observable<Album>;
  
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    //this.info = new Type();
    this.album$ = this.store.select(getAlbum);
  }

  ngOnInit() {
    this.store.dispatch(new fromAlbum.GetAlbum(Number(this.route.snapshot.paramMap.get('id'))));
  }

}
