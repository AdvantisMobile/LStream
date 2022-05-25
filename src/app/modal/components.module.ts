
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UrlComponent } from './url/url.component';
import { RemoveComponent } from './remove/remove.component';
import { PremiumComponent } from './premium/premium.component';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    ListComponent,
    UrlComponent,
    RemoveComponent,
    PremiumComponent
  ],
  exports: [
    ListComponent,
    UrlComponent,
    RemoveComponent,
    PremiumComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
