import * as fromAlbum from "./music.actions";
import { MusicState } from './music.state';
import { AppState } from '../app.state';
import { Album } from 'src/app/models/album';

export const initialState: MusicState = {
  albums: [],
  album: null,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action: fromAlbum.AlbumActions): MusicState {
  switch (action.type) {

    case fromAlbum.GET_ALL_ALBUMS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAlbum.GET_ALL_ALBUMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        albums: action.payload.results
      };
    }

    case fromAlbum.GET_ALL_ALBUMS_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading albums'
      };
    }

    case fromAlbum.GET_ALBUM: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAlbum.GET_ALBUM_SUCCESS: {
      const album = new Album();
      album.details = action.payload.results[0];
      album.songs = action.payload.results.filter(type => type.wrapperType === 'track');
      console.log(album);

      return {
        ...state,
        loading: false,
        album: album
      };
    }

    case fromAlbum.GET_ALBUM_FAIL: {
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
  console.log(['state.albums', state]);
  return state.music.albums;

  /* this.jsonp.get(url)
        .pipe(map(res => <Array<Type>>(res.json())))
        .subscribe(albums => {
          this.albums = albums;
          resolve(this.albums);
        }); */
};
export const getLoading = (state: MusicState) => state.loading;
export const getError = (state: MusicState) => state.error;

export const getAlbum = (state: AppState) => { 
  console.log(['state.album', state]);
  return state.music.album;
};
