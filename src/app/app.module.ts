import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { ListComponent } from './modal/list/list.component';
import { UrlComponent } from './modal/url/url.component';
import { RemoveComponent } from './modal/remove/remove.component';
import { PremiumComponent } from './modal/premium/premium.component';
import { ComponentsModule } from './modal/components.module';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';


import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    ListComponent,
    UrlComponent,
    RemoveComponent,
    PremiumComponent
  ],
  imports: [ 
    MbscModule, 
    BrowserModule, 
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), 
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    AppVersion,
    FileChooser,
    File,
    BarcodeScanner,
    VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
