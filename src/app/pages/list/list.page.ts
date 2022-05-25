import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController  } from '@ionic/angular';
import { UrlComponent } from 'src/app/modal/url/url.component';
import { ListComponent } from '../../modal/list/list.component';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';
import { MbscCardOptions } from '@mobiscroll/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  videoList: any = [];
  dataReturned: any;
  scanSub: any;
  qrText: string;
  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  videoOptions: VideoOptions;
  settings: MbscCardOptions = {
    theme: 'ios',
    themeVariant: 'light'
};
  constructor(
    public actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private fileChooser: FileChooser,
    private scanner: BarcodeScanner,
    private videoPlayer: VideoPlayer
  ) { 
      this.encodedData = "Programming isn't about what you know";
      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };
      this.videoOptions = {
        volume: 0.7
      };
  }

  ngOnInit() {
  }
  addVideo(){
    console.log('Add Video Btn');
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ListComponent,
      cssClass: 'list-wrap',
      // breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Returned Data', this.dataReturned);
        
        if(this.dataReturned === 'URL'){
         
          this.presentURLModal();
        
        }else if(this.dataReturned === 'File'){
          console.log('File Open');
         
          this.fileChooser.open().then(uri => {
            console.log('File Opne URI', uri);
          })
          .catch(e => console.log(e));

        }else if(this.dataReturned === 'QR'){
          console.log('QR Scan!');
         
          this.scanner.scan().then(res => {
            this.scannedBarCode = res;
          }).catch(err => {
            alert(err);
          });
        }
      }else{

      }
      
    });
    return await modal.present();
  }
  async presentURLModal(){
    const modal = await this.modalCtrl.create({
      component: UrlComponent,
      cssClass: 'url-wrap',
      componentProps: {
        'type': 'URL',
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Returned Data URL', this.dataReturned.data);
        this.videoList.push(dataReturned.data);
        this.playOfflineVideo();
      }else{
        console.log('Return Data Null');
      }
      
    });
    return await modal.present();
  }
  //--Video Play Part
  playOfflineVideo() {
    console.log('Video Play Offline');
    this.videoPlayer.play('assets/videos/SampleVideo.mp4').then(() => {
      console.log('video finished');
    }).catch(error => {
      console.log(error);
    });
  }
  playOnlineVideo() {
    console.log('Video Play');
    this.videoPlayer.play('http://static.videogular.com/assets/videos/elephants-dream.mp4').then(() => {
      console.log('video finished');
    }).catch(error => {
      console.log(error);
    });
  }
  closeVideoPlayer() {
    this.videoPlayer.close();
  }

}
