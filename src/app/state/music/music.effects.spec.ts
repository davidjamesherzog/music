import { MusicEffects } from './music.effects';
import { TestBed, async, inject } from '@angular/core/testing';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';
import { ITunesService } from 'src/app/services/itunes.service';
import * as musicActions from './music.actions';

describe('Music Effects', () => {
  let itunseService: ITunesService;

  beforeEach(() => {
    itunseService = jasmine.createSpyObj('itunseService', ['getAlbums', 'getAlbum']);
  });

  it ('getAllAlbum$', () => {
    const action = new musicActions.GetAllAlbums('test');
    const source = cold('a', { a: action });
    const actions = new Actions(source);
    const effects = new MusicEffects(actions, itunseService);

    effects.getAllAlbums$.subscribe(() => {
      expect(itunseService.getAlbums).toHaveBeenCalledWith('test');
    });

  });

  it ('getAlbumById$', () => {
    const action = new musicActions.GetAlbum(1);
    const source = cold('a', { a: action });
    const actions = new Actions(source);
    const effects = new MusicEffects(actions, itunseService);

    effects.getAllAlbums$.subscribe(() => {
      expect(itunseService.getAlbum).toHaveBeenCalledWith(1);
    });

  });

});
