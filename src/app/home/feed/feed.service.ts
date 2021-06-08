import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private storage: Storage, private route: Router, private http: HttpClient) { }

  public recuperaDadosLocais(){
    
  }

  public salvarPost(content: any, username: any, userId: any, name: any, email: any){

    this.http.post('http://localhost:3008/auth/register-post', {content:content, username:username, user_id:userId, name:name, email:email}, { headers: new HttpHeaders({'Content-type': 'application/json'})})
      .subscribe(data => {
        console.log(data);
        this.redirecionaFeed();
       }, error => {
        console.log(error);
    });

  }

  public recuperaPosts(){
    return this.http.get('http://localhost:3008/auth/get-posts',{ headers: new HttpHeaders({'Content-type': 'application/json'})});
  }

  public redirecionaFeed(){
    this.route.navigate(['/home/feed']);
  }

}
