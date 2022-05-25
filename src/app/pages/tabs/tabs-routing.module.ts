import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ListPage } from '../list/list.page'
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '',
            component: ListPage,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          // }
        ]
      },
       
      {
        path: 'video',
        children: [
          {
            path: '',
            loadChildren: () => import('../video/video.module').then(m => m.VideoPageModule)
          }
        ]
      },
      {
        path: 'play',
        children: [
          {
            path: '',
            loadChildren: () => import('../play/play.module').then(m => m.PlayPageModule)
          }
        ]
      },
      {
        path: 'browser',
        children: [
          {
            path: '',
            loadChildren: () => import('../browser/browser.module').then(m => m.BrowserPageModule)
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
          }
        ]
      },
      {
        path: 'help',
        children: [
          {
            path: '',
            loadChildren: () => import('../help/help.module').then(m => m.HelpPageModule)
          }
        ]
      },
      {
        path: 'rate',
        children: [
          {
            path: '',
            loadChildren: () => import('../rate/rate.module').then(m => m.RatePageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/app/tabs/list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
