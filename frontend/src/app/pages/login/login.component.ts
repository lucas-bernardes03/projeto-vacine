import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {IUsuario, LoginService} from '../../service/login.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {RegisterComponent} from './register/register.component';

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

  ref: DynamicDialogRef | undefined

  constructor(private loginService : LoginService,
              private messageService: MessageService,
              private dialogService : DialogService) {
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

  registrar(){
    this.ref = this.dialogService.open(RegisterComponent, {
      header: 'Nova Conta',
      width: '20vw',
      height: '45vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Conta cadastrada!'})
      }
    })
  }
}
