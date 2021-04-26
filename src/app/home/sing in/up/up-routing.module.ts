import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpPage } from './up.page';

const routes: Routes = [
  {
    path: '',
    component: UpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpPageRoutingModule {}
