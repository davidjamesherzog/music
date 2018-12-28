import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ITunesService} from '../services/itunes.service';
import {Type} from '../models/type';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  albums: Type[];

  constructor(private router: Router, private iTunes: ITunesService) { }

  ngOnInit() {
  }

  // Navigate to album details page with the id as a parameter
  goToDetails(event, id) {
    this.router.navigate([`/music/${id}`]);
  }

  // Search for albums
  // Handle input event from search bar
  search(searchTerm) {
    let term = searchTerm.target.value;
    //console.log(`term: ${term}`);

    // We will only perform the search if we have 3 or more characters
    if (term === undefined || term.trim() == '' || term.trim().length < 3) {
      this.albums = [];
    } else {

      let albumsSuccess = albums => {
        this.albums = albums.results;
      };

      this.iTunes
        .getAlbums(term)
        .then(albumsSuccess);
    }
  }

}
