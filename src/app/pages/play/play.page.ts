import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  videos: any = [];
  constructor() { }

  ngOnInit() {
    this.videos = [
      {id:0, title:'Bebe de Justin', url:'https://www.youtube.com/watch?v=kffacxfA7G4'},
      {id:1, title:'Bebe de Justin', url:'https://www.youtube.com/watch?v=kffacxfA7G4'},
      {id:2, title:'Bebe de Justin', url:'https://www.youtube.com/watch?v=kffacxfA7G4'},
      {id:3, title:'Bebe de Justin', url:'https://www.youtube.com/watch?v=kffacxfA7G4'}

    ]
  }
  PlayVideo(){

  }

}
