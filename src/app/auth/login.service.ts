import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: Storage, private route: Router, private http: HttpClient) { }

  public salvaDadosLocais(flag: boolean, nameUser: string, email: string, username: string, userId: string){
    this.storage.set('manterLogado',flag);
    this.storage.set('nameUser',nameUser);
    this.storage.set('email',email);
    this.storage.set('username',username);
    this.storage.set('userId',userId);
  }

  public autenticacao(username: any, senha: any, flag: boolean){
    console.log(username);
    console.log(senha);

    this.http.post('http://localhost:3008/auth/authenticate', {username:username,password:senha}, { headers: new HttpHeaders({'Content-type': 'application/json'})})
      .subscribe(data => {
      this.salvaDadosLocais(flag, data["user"]["name"], data["user"]["email"], data["user"]["username"], data["user"]["_id"]);
        this.redirecionaFeed();
       }, error => {
        console.log(error);
    });

  }

  public async recuperaFlagLogin(){
    return await this.storage.get('manterLogado');
  }

  public redirecionaFeed(){
    this.route.navigate(['/home/feed']);
  }
  
  public redirecionaCadastro(){
    this.route.navigate(['/cadastro']);
  }
}
