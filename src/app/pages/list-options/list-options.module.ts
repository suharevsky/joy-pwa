import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOptionsRoutingModule } from './list-options-routing.module';

import { ListOptionsPage } from './list-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOptionsRoutingModule
  ],
  declarations: [ListOptionsPage]
})
export class ListOptionsPageModule {}
