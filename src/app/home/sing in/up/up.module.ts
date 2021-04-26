import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpPageRoutingModule } from './up-routing.module';

import { UpPage } from './up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpPageRoutingModule
  ],
  declarations: [UpPage]
})
export class UpPageModule {}
