import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, debounceTime, switchMap, catchError } from 'rxjs/operators';

import * as MusicActions from './music.actions';
import { ITunesService } from '../../services/itunes.service';
import { AlbumList } from 'src/app/models/album.list';
import { AlbumDetails } from 'src/app/models/album.details';

@Injectable()
export class MusicEffects {

  @Effect() getAllAlbums$: Observable<Action> = this.actions$
    //.ofType(MusicActions.GET_ALL_ALBUMS) 
    .pipe(
      ofType(MusicActions.GET_ALL_ALBUMS),
      debounceTime(300),
      map((action: MusicActions.GetAllAlbums) => action.payload),
      switchMap((search: string) => this.itunesService.getAlbums(search)
        .pipe(
          map((list: AlbumList) => new MusicActions.GetAllAlbumsSuccess(list)),
          catchError(err => of(new MusicActions.GetAllAlbumsFail(err)))
        )
      )
    );

  @Effect() getAlbumById: Observable<Action> = this.actions$
    .pipe(
      ofType(MusicActions.GET_ALBUM),
      map((action: MusicActions.GetAlbum) => action.payload),
      switchMap((id: number) => this.itunesService.getAlbum(id)
        .pipe(
          map((details: AlbumDetails) => (new MusicActions.GetAlbumSuccess(details))),
          catchError(err => of(new MusicActions.GetAlbumFail(err)))
        )
      )
    );

  constructor(private actions$: Actions, private itunesService: ITunesService) { }
}