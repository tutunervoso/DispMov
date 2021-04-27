import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorePage } from './explore.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  },
  {
    path: 'feed',
    loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'likes',
    loadChildren: () => import('../likes/likes.module').then( m => m.LikesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePageRoutingModule {}
