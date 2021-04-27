import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikesPage } from './likes.page';

const routes: Routes = [
  {
    path: '',
    component: LikesPage
  },
  {
    path: 'feed',
    loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
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
export class LikesPageRoutingModule {}
