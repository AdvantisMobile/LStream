import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  bottomTabs = environment.bottomTab;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  getImage(tab:any) {
    // console.log('Tabs===>>', tab);
    return this.router.url === `/app/tabs/${tab.url}` ? tab.srcActivated : tab.src;
  }

}
