import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as MusicActions from '../state/music/music.actions';
import { getAllAlbums } from '../state/music/music.reducer';
import { Type } from '../models/type';
import { AlbumList } from '../models/album.list';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  albums$: Observable<Array<Type>>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.albums$ = this.store.select(getAllAlbums);
  }

  ngOnInit(): void {
  }

  // Navigate to album details page with the id as a parameter
  goToDetails(event, id) {
    this.router.navigate([`/music/${id}`]);
  }

  // Search for albums
  // Handle input event from search bar
  search(searchTerm) {
    const term = searchTerm.target.value;

    // We will only perform the search if we have 3 or more characters
    if (term === undefined || term.trim() === '' || term.trim().length < 3) {
      this.store.dispatch( new MusicActions.GetAllAlbumsSuccess(new AlbumList()));
    } else {
      this.store.dispatch(new MusicActions.GetAllAlbums(term));
    }
  }

}
