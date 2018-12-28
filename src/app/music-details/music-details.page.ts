import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ITunesService} from '../services/itunes.service';

import {Type} from '../models/type';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.page.html',
  styleUrls: ['./music-details.page.scss'],
})
export class MusicDetailsPage implements OnInit {

  info: Type;
  songs: Type[];

  constructor(private route: ActivatedRoute, private iTunes: ITunesService) {
    this.info = new Type();
  }

  ngOnInit() {
    
    let albumSuccess = album => {
      this.info = album.results[0];
      this.songs = album.results;
      this.songs.shift();
    };

    this.iTunes
      .getAlbum(Number(this.route.snapshot.paramMap.get('id')))
      .then(albumSuccess);
  }

}
