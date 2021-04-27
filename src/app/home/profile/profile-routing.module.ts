import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  /*{
    path: 'feed',
    loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'likes',
    loadChildren: () => import('../likes/likes.module').then( m => m.LikesPageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
