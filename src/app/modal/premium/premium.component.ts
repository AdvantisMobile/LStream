import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
 
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss'],
})
export class PremiumComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
 
  ) { }

  ngOnInit() {

  }
  onClose(){
    this.modalCtrl.dismiss(); 
  }
  onHelp(){

  }
  onGPay(){

  }
  onPremium(){

  }

}
