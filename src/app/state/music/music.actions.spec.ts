import { AlbumDetails } from 'src/app/models/album.details';
import { AlbumList } from 'src/app/models/album.list';
import * as MusicActions from './music.actions';
/* import {
  GetAllAlbums,
  GetAllAlbumsSuccess,
  GetAllAlbumsFail,
  GetAlbum,
  GetAlbumSuccess,
  GetAlbumFail,
  GET_ALL_ALBUMS,
  GET_ALL_ALBUMS_SUCCESS,
  GET_ALL_ALBUMS_FAIL,
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAIL
} from './music.actions'; */

describe('Music actions', () => {

  describe('GetAllAlbums', () => {

    it('should create an action', () => {
      const payload = 'test';
      const action = new MusicActions.GetAllAlbums(payload);
      expect({ ...action }).toEqual({
        type: MusicActions.GET_ALL_ALBUMS,
        payload
      });
    });

  });

  describe('GetAllAlbumsSuccess', () => {

    it('should create an action', () => {
      const payload = new AlbumList();
      const action = new MusicActions.GetAllAlbumsSuccess(payload);
      expect({ ...action }).toEqual({
        type: MusicActions.GET_ALL_ALBUMS_SUCCESS,
        payload
      });
    });

  });

  describe('GetAllAlbumsFailure', () => {

    it('should create an action', () => {
      const payload = { error: 'test' };
      const action = new MusicActions.GetAllAlbumsFail(payload);
      expect({ ...action }).toEqual({
        type: MusicActions.GET_ALL_ALBUMS_FAIL,
        payload
      });
    });

  });

  describe('GetAlbum', () => {

    it('should create an action', () => {
      const payload = 1;
      const action = new MusicActions.GetAlbum(payload);
      expect({ ...action }).toEqual({
        type: MusicActions.GET_ALBUM,
        payload
      });
    });

  });

  describe('GetAlbumSuccess', () => {

    it('should create an action', () => {
      const payload = new AlbumDetails();
      const action = new MusicActions.GetAlbumSuccess(payload);
      expect({ ...action }).toEqual({
        type: MusicActions.GET_ALBUM_SUCCESS,
        payload
      });
    });

  });

  describe('GetAlbumFailure', () => {

    it('should create an action', () => {
      const payload = { error: 'test' };
      const action = new MusicActions.GetAlbumFail(payload);
      expect({ ...action }).toEqual({
        type: MusicActions.GET_ALBUM_FAIL,
        payload
      });
    });

  });


});
