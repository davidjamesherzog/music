import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'music',
    loadChildren: './music/music.module#MusicPageModule'
  },
  { 
    path: 'music/:id',
    loadChildren: './music-details/music-details.module#MusicDetailsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
