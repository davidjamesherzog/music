import * as MusicActions from "./music.actions";
import { MusicState } from './music.state';
import { AppState } from '../app.state';
import { Album } from 'src/app/models/album';
import { Type } from "src/app/models/type";

export const initialState: MusicState = {
  albums: [],
  album: null,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action: MusicActions.AlbumActions): MusicState {
  switch (action.type) {

    case MusicActions.GET_ALL_ALBUMS: {
      return {
        ...state,
        loading: true
      };
    }

    case MusicActions.GET_ALL_ALBUMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        albums: action.payload.results
      };
    }

    case MusicActions.GET_ALL_ALBUMS_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading albums'
      };
    }

    case MusicActions.GET_ALBUM: {
      return {
        ...state,
        loading: true
      };
    }

    case MusicActions.GET_ALBUM_SUCCESS: {
      const album = new Album();
      if (action.payload.results) {
        album.details = action.payload.results[0];
        album.songs = action.payload.results.filter(type => type.wrapperType === 'track');
      } else {
        album.details = new Type();
        album.songs = [];
      }

      return {
        ...state,
        loading: false,
        album: album
      };
    }

    case MusicActions.GET_ALBUM_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading album'
      };
    }

    default: {
      return state;
    }
  }
}

export const getAllAlbums = (state: AppState) => { 
  return state.music.albums;
};
export const getLoading = (state: MusicState) => state.loading;
export const getError = (state: MusicState) => state.error;

export const getAlbum = (state: AppState) => { 
  return state.music.album;
};
