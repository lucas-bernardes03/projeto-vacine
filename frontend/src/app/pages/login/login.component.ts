import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Router, RouterLink} from '@angular/router';
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
              private dialogService : DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl<String | null>(null),
      password: new FormControl<String | null>(null)
    })
  }

  logar(){
    if(!this.validarForm()) return

    let usuario = this.form.value as IUsuario
    this.loginService.login(usuario).subscribe({
      next: response => {
        if(!response.sucesso){
          this.messageService.add({severity: 'error', summary: 'Falha na Autenticação', detail: 'Usuário ou senha incorretos.'})
        }

        localStorage.setItem('token', btoa(JSON.stringify(response.Token)));
        localStorage.setItem('contaId', btoa(JSON.stringify(response.contaId)));
        this.router.navigate(['']);
      },
      error: err => {
        this.messageService.add({severity: 'error', summary: 'Falha na Autenticação', detail: 'Usuário ou senha incorretos.'})
      }
    })
  }

  validarForm(): boolean{
    if(!this.form.get('username')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Username é obrigatório'})
      return false
    }

    if(!this.form.get('password')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Senha é obrigatório'})
      return false
    }

    return true
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
