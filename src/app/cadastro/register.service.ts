import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private route: Router, private http: HttpClient) { }
  public registrar(name:any, username: any, phone: any, email:any, password: any, flag: boolean){
    console.log('asd');

    this.http.post('http://localhost:3008/auth/register', {name: name, username:username, phone: phone, email: email, password: password}, { headers: new HttpHeaders({'Content-type': 'application/json'})})
      .subscribe(data => {
        console.log(data);
        this.route.navigate(['/auth']);
       }, error => {
        console.log(error.error.error);
        if(error.error.error === 'user already exists'){
          console.log('USUÁRIO JÁ EXISTE NO BANCO');
        }
    });

  }
}
