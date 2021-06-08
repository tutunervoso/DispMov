import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private route: Router, private http: HttpClient) { }

  public recuperaPostsPerfil(userId: string){
    console.log(userId);
    return this.http.post('http://localhost:3008/auth/get-posts-perfil', {user_id: userId},{ headers: new HttpHeaders({'Content-type': 'application/json'})});
  }

}
