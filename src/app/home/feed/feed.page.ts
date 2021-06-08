import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { FeedService } from './feed.service';

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

  public content = '';
  public username = '';
  public userId = '';
  public name = '';
  public email = '';
  public posts = [];

  public photos: Photo[] = [
    {id: 2, liked: false},
    {id: 3, liked: false},
    {id: 4, liked: false},
    {id: 5, liked: false},
    {id: 7, liked: false},
    {id: 8, liked: false},
  ]

  constructor(private storage: Storage, private feedSv: FeedService) { }

  async ngOnInit() {
    await this.storage.create();
    this.recuperaPosts();

    this.username = await this.storage.get('username');
    this.userId = await this.storage.get('userId');
    this.name = await this.storage.get('nameUser');
    this.email = await this.storage.get('email');
  }

  public toggleLike(p: Photo){
    p.liked = !p.liked;
  }

  public recuperaPosts(){
    this.feedSv.recuperaPosts()
    .subscribe(data => {
        console.log(data);
        this.posts = data['posts'];
      }, error => {
        console.log(error);
    });
  }
  
  public salvaPost(){
    this.feedSv.salvarPost(this.content, this.username, this.userId, this.name, this.email);
    this.content = '';
    this.recuperaPosts();
  }

}
