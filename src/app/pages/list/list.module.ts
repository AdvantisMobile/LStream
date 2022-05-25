import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { MbscModule } from '@mobiscroll/angular';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    MbscModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    // TranslateModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
