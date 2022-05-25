import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  autoSync:any;
  googlePlay:any;
  diableSync: any;
  constructor() { }

  ngOnInit() {
    this.autoSync = true;
    this.googlePlay = true;
    this.diableSync = false;
  }
  onDisableSync(){
    console.log('Diable Sync', this.diableSync);
    // this.diableSync = !this.diableSync;
  }
  
  onDeleteAllList(){
    console.log('Delete All List');
  }
  onBackupList(){
    console.log('Backup List');
  }
  onRestoreList(){
    console.log('Restore List');
  }
  onRemoveBackup(){
    console.log('Remove Backup');
  }
  onSearchEngine(){
    console.log('Search Engine List');
  }
  onAutoSync(){
    console.log('Auto Sync', this.autoSync);
  }
  onGooglePlay(){
    console.log('Google Play', this.googlePlay);
  }


}
