import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {IUsuario, LoginService} from '../../service/login.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Button,
    RouterLink,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form!: FormGroup

  constructor(private loginService : LoginService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl<String | null>(null),
      senha: new FormControl<String | null>(null)
    })
  }

  logar(){
    let usuario = this.form.value as IUsuario
    this.loginService.login(usuario).subscribe({
      next: response => {
        if(!response.sucesso){
          this.messageService.add({severity: 'error', summary: 'Falha na Autenticação', detail: 'Usuário ou senha incorretos.'})
        }
      }
    })
  }
}
