import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
 
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss'],
})
export class UrlComponent implements OnInit {
  @Input("type") type: string;
  urlLink:string = "";
  url: string = '';
  constructor(
    public navParams: NavParams,
    private modalController: ModalController,
  ) { 
    this.url = '';
  }

  ngOnInit() {
    
  }
  getData(data:any){
    console.log('Data', data.detail.value);
    this.url = data.detail.value;
  }
  onOk(){
    console.log('URL Link', this.url);
    let passData = {
      data: this.url
    };
    this.modalController.dismiss(passData);
  }
  onCancel(){
    this.modalController.dismiss(null);
  }
  

}
