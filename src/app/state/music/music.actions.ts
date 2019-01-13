import { Action } from "@ngrx/store";
import { Type } from "../../models/type";
import { AlbumList } from "src/app/models/album.list";
import { AlbumDetails } from "src/app/models/album.details";

export const GET_ALL_ALBUMS = 'Get All Albums';
export const GET_ALL_ALBUMS_SUCCESS = 'Get All Albums Success';
export const GET_ALL_ALBUMS_FAIL = 'Get All Albums Fail';

export const GET_ALBUM = 'Get Album';
export const GET_ALBUM_SUCCESS = 'Get Album Success';
export const GET_ALBUM_FAIL = 'Get Album Fail';

export class GetAllAlbums implements Action {
  readonly type = GET_ALL_ALBUMS;
  constructor(public payload: string) { }
}

export class GetAllAlbumsSuccess implements Action {
  readonly type = GET_ALL_ALBUMS_SUCCESS;
  constructor(public payload: AlbumList) {
    console.log(['albums_success', payload]);
  }
}

export class GetAllAlbumsFail implements Action {
  readonly type = GET_ALL_ALBUMS_FAIL;
  constructor(public payload: any) { }
}

export class GetAlbum implements Action {
  readonly type = GET_ALBUM;
  constructor(public payload: number) { }
}

export class GetAlbumSuccess implements Action {
  readonly type = GET_ALBUM_SUCCESS;
  constructor(public payload: AlbumDetails) {
    console.log(['album_success', payload]);
  }
}

export class GetAlbumFail implements Action {
  readonly type = GET_ALBUM_FAIL;
  constructor(public payload: any) { }
}

export type AlbumActions =
  GetAllAlbums
  | GetAllAlbumsSuccess
  | GetAllAlbumsFail
  | GetAlbum
  | GetAlbumSuccess
  | GetAlbumFail;
