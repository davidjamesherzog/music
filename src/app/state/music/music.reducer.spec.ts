import { AlbumDetails } from './../../models/album.details';
import { AlbumList } from 'src/app/models/album.list';
import * as musicReducer from './music.reducer';
import * as musicActions from './music.actions';
import { Type } from 'src/app/models/type';

describe('Music Reducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = musicReducer;
      const action = {} as any;
      const state = musicReducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('GET_ALL_ALBUMS action', () => {
    it('should set loading to true', () => {
      const { initialState } = musicReducer;
      const action = new musicActions.GetAllAlbums('test');
      const state = musicReducer.reducer(initialState, action);

      expect(state.loading).toBeTruthy();
      expect(state.album).toEqual(null);
      expect(state.albums).toEqual([]);
      expect(state.error).toEqual('');
    });
  });

  describe('GET_ALL_ALBUMS_SUCCESS action', () => {
    it('should return success state', () => {
      const { initialState } = musicReducer;
      const previousState = { ...initialState, loading: true };
      const albumList: AlbumList = new AlbumList();
      albumList.results = [new Type(), new Type()];
      const action = new musicActions.GetAllAlbumsSuccess(albumList);
      const state = musicReducer.reducer(previousState, action);

      expect(state.loading).toBeFalsy();
      expect(state.album).toEqual(null);
      expect(state.albums).toEqual(albumList.results);
      expect(state.error).toEqual('');
    });
  });

  describe('GET_ALL_ALBUMS_FAIL action', () => {
    it('should return the previous state', () => {
      const { initialState } = musicReducer;
      const previousState = { ...initialState, loading: true };
      const action = new musicActions.GetAllAlbumsFail({});
      const state = musicReducer.reducer(previousState, action);

      expect(state.loading).toBeFalsy();
      expect(state.album).toEqual(null);
      expect(state.albums).toEqual([]);
      expect(state.error).toEqual('error loading albums');
    });
  });

  describe('GET_ALBUM action', () => {
    it('should set loading to true', () => {
      const { initialState } = musicReducer;
      const action = new musicActions.GetAlbum(1);
      const state = musicReducer.reducer(initialState, action);

      expect(state.loading).toBeTruthy();
      expect(state.album).toEqual(null);
      expect(state.albums).toEqual([]);
      expect(state.error).toEqual('');
    });
  });

  // TODO - Fix this test
  /* describe('GET_ALBUM_SUCCESS action', () => {
    it('should return success state', () => {
      const { initialState } = musicReducer;
      const previousState = { ...initialState, loading: true };
      const albumDetails: AlbumDetails = new AlbumDetails();
      albumDetails.results = [new Type(), new Type()];
      const action = new musicActions.GetAlbumSuccess(albumDetails);
      const state = musicReducer.reducer(previousState, action);

      expect(state.loading).toBeFalsy();
      expect(state.album.songs).toEqual([]);
      expect(state.albums).toEqual(albumDetails.results);
      expect(state.error).toEqual('');
    });
  }); */

  describe('GET_ALBUM_FAIL action', () => {
    it('should return the previous state', () => {
      const { initialState } = musicReducer;
      const previousState = { ...initialState, loading: true };
      const action = new musicActions.GetAlbumFail({});
      const state = musicReducer.reducer(previousState, action);

      expect(state.loading).toBeFalsy();
      expect(state.album).toEqual(null);
      expect(state.albums).toEqual([]);
      expect(state.error).toEqual('error loading album');
    });
  });

});
