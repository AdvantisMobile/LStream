// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bottomTab: [
    {
      label: 'List',
      url: 'list',
      src: 'assets/imgs/list.png',
      srcActivated: 'assets/imgs/list-select.png',
      class: ''
    },
    {
      label: 'Video',
      url: 'video',
      src: 'assets/imgs/video.png',
      srcActivated: 'assets/imgs/video-select.png',
      class: ''
    },
    {
      label: 'Play',
      url: 'play',
      src: 'assets/imgs/play.png',
      srcActivated: 'assets/imgs/play-select.png',
      class: ''
    },
    {
      label: 'browser',
      url: 'browser',
      src: 'assets/imgs/browser.png',
      srcActivated: 'assets/imgs/browser-select.png',
      class: ''
    }    
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
