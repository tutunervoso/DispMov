import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public username = '';
  public senha = '';
  public manterLogado = false;
  public flag;

  constructor(private storage: Storage, private loginSv: LoginService) {}

  async ngOnInit() {
    await this.storage.create();
    this.verificaLogin();
  }

   public async verificaLogin(){
    this.flag = await this.loginSv.recuperaFlagLogin();
    console.log(this.flag);
    this.manterLogado = this.flag;
    if(this.flag){
      this.loginSv.redirecionaFeed();
    }else{
      console.log('É false');
    }
  }

  public fazerLogin(){
    this.loginSv.autenticacao(this.username,this.senha,this.manterLogado);
    //guardar id do usuario no bd localmente
  }

  public cadastrarSe(){
    console.log('Cadastrar');
    this.storage.get('manterLogado');
    this.loginSv.redirecionaCadastro();
  }

}
