import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public name = '';
  public username = '';
  public senha = '';
  public password = '';
  public phone = '';
  public email = '';

  constructor(private registerS: RegisterService) { }

  ngOnInit() {
  }

  public registrarSe(){
    if(this.password === this.senha){
      this.registerS.registrar(this.name, this.username, this.phone, this.email, this.password, false);
    }else{
      console.log('as senhas não conferem');
    }
  }

}
