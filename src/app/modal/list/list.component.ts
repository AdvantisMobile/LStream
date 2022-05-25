import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  

  constructor(
    private modalCtrl: ModalController,
    private fileChooser: FileChooser,
 
  ) { 
      
  }

  ngOnInit() {

  }
  addURL(){
    this.closeModal();
  }
  addQR(){
    this.scanQRCode();
  }
  addFile(){
    this.fileOpen();
  }
  closeModal(){
    this.modalCtrl.dismiss('URL');
  }
  scanQRCode(){
    this.modalCtrl.dismiss('QR')
  }
  fileOpen(){
    this.modalCtrl.dismiss('File')  
  }
}
