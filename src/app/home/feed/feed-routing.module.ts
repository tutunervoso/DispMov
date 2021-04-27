import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPage
  },
  /*{
    path: 'explore',
    loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'likes',
    loadChildren: () => import('../likes/likes.module').then( m => m.LikesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPageRoutingModule {}
