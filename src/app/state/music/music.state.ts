import { Type } from '../../models/type';
import { Album } from '../../models/album'

export interface MusicState {
  albums: Type[];
  album: Album;
  loading: boolean;
  error: string;
}
