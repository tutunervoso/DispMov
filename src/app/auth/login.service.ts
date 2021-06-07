import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: Storage, private route: Router, private http: HttpClient) { }

  public salvaDadosLocais(flag: boolean, nameUser: String){
    this.storage.set('manterLogado',flag);
    this.storage.set('nameUser',nameUser);
  }

  public autenticacao(username: any, senha: any, flag: boolean){
    console.log(username);
    console.log(senha);

    this.http.post('http://localhost:3008/auth/authenticate', {username:username,password:senha}, { headers: new HttpHeaders({'Content-type': 'application/json'})})
      .subscribe(data => {
        console.log(data);
        this.salvaDadosLocais(flag, data['user']['name']);
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
