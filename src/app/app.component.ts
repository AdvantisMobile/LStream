import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController, ModalController } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Storage } from '@ionic/storage';
import { UserData } from './providers/user-data';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { RemoveComponent } from './modal/remove/remove.component';
import { PremiumComponent } from './modal/premium/premium.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'settings',
      url: '/app/tabs/setting',
      icon: 'settings',
      value:''
    },
    {
      title: 'help',
      url: '/app/tabs/help',
      icon: 'help-circle',
      value:''
    },
    {
      title: 'rate',
      url: '/app/tabs/rate',
      icon: 'star',
      value:''
    },    
    // {
    //   title: 'Quitar anuncios',
    //   url: '/app/tabs/setting',
    //   icon: 'close-circle'
    // },     
    // {
    //   title: 'Compra Premium',
    //   url: '/app/tabs/setting',
    //   icon: 'ribbon'
    // }     
  ];

  loggedIn = false;
  dark = false;
  versionCode: any;
  constructor(
    private menu: MenuController,
    private modalCtrl: ModalController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private appVersion: AppVersion,
    private translate: TranslateService,
  ) {
    this.versionCode = "1.0"
    this.initializeApp();
  }
  async ngOnInit() {
    // this.checkLoginStatus();
    // this.listenForLoginEvents();

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    console.log("App Name",this.appVersion.getAppName());
    console.log("App Package Name",this.appVersion.getPackageName());
    console.log("App Version Code",this.appVersion.getVersionCode());
    console.log('App Version Number', this.appVersion.getVersionNumber());
    this.platform.ready().then(() => {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
        console.log("App Name",this.appVersion.getAppName());
        console.log("App Package Name",this.appVersion.getPackageName());
        console.log("App Version Code",this.appVersion.getVersionCode());
        console.log('App Version Number', this.appVersion.getVersionNumber());
      }
    });
  }
  initSideMenu(){
    for(let i=0; i< this.appPages.length;i++){
      let name = "sideMenu."+this.appPages[i].title;
      // console.log('Name== ', name, this.goalList[i].value);
      this.translate.get(name).subscribe(
        value => {
          // value is our translated string
          console.log('value', value);
          this.appPages[i].value = value;
        }
      )
    }
  }
  //--Components Dialogues=======
  async removeAds(){
    const modal = await this.modalCtrl.create({
      component: RemoveComponent,
      cssClass: 'remove-wrap',
      componentProps: {
        'type': 'URL',
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        console.log('Returned Data', dataReturned.data);
      }else{

      }
      
    });
    return await modal.present();
  }
  async premium(){
    const modal = await this.modalCtrl.create({
      component: PremiumComponent,
      cssClass: 'pre-wrap',
      componentProps: {
        'type': 'URL',
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        console.log('Returned Data', dataReturned.data);
      }else{

      }
      
    });
    return await modal.present();
  }
  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
