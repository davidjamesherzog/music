import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromMusic from './music/music.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  music: fromMusic.reducer
};
