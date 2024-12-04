import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {LoginService} from '../../../service/login.service';
import {Button} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PaginatorModule} from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    Button,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form!: FormGroup
  constructor(public ref : DynamicDialogRef,
              private loginService:LoginService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl<String | null>(null),
      senha: new FormControl<String | null>(null)
    })
  }

  validarForm(): boolean{
    if(!this.form.get('usuario')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Usuário é obrigatório'})
      return false
    }

    if(!this.form.get('senha')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Senha é obrigatório'})
      return false
    }

    return true
  }

  cadastrar(){
    if(!this.validarForm()) return

    this.loginService.register(this.form.value).subscribe({
      next: () => {
        this.ref.close(true)
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao cadastrar conta'})
      }
    })
  }

}
