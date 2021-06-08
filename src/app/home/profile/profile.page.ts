import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public content = '';
  public username = '';
  public userId = '';
  public name = '';
  public email = '';
  public posts = [];

  public size = 4;
  constructor(private storage: Storage, private feedSv: ProfileService) { }

  async ngOnInit() {
    await this.storage.create();
    this.username = await this.storage.get('username');
    this.userId = await this.storage.get('userId');
    this.name = await this.storage.get('nameUser');
    this.email = await this.storage.get('email');

    this.recuperaPosts();
  }

  public recuperaPosts(){
    this.feedSv.recuperaPostsPerfil(this.userId)
    .subscribe(data => {
        console.log(data);
        this.posts = data['posts'];
      }, error => {
        console.log(error);
    });
  }

}
