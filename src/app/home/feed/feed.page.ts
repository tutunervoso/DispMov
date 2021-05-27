import { Component, OnInit } from '@angular/core';

type Photo = {
  id: number;
  liked: boolean;
}
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos: Photo[] = [
    {id: 2, liked: false},
    {id: 3, liked: false},
    {id: 4, liked: false},
    {id: 5, liked: false},
    {id: 7, liked: false},
    {id: 8, liked: false},
  ]

  constructor() { }

  ngOnInit() {
  }

  public toggleLike(p: Photo){
    p.liked = !p.liked;
  }


}
