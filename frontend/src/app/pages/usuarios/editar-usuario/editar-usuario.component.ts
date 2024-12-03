import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UsuarioService} from '../../../service/usuario.service';
import {MessageService} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Button} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [
    Button,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule
  ],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit{
  form!: FormGroup

  sexos = ['M', 'F']
  ufs= ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

  constructor(private usuarioService: UsuarioService,
              private messageService: MessageService,
              public ref : DynamicDialogRef,
              public config : DynamicDialogConfig) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl<Number | null>(null ),
      nome: new FormControl<String | null>(null),
      dataNascimento: new FormControl<Date | null>(null),
      sexo: new FormControl<String | null>(null),
      logradouro: new FormControl<String | null>(null),
      numero: new FormControl<Number | null>(null),
      setor: new FormControl<String | null>(null),
      cidade: new FormControl<String | null>(null),
      uf: new FormControl<String | null>(null),
    })

    if(this.config.data) this.popularForm()
  }

  popularForm(){
    this.form.get('id')?.patchValue(this.config.data.id)
    this.form.get('nome')?.patchValue(this.config.data.nome)
    let data = new Date(this.config.data.dataNascimento)
    this.form.get('dataNascimento')?.patchValue(data)
    this.form.get('sexo')?.patchValue(this.config.data.sexo)
    this.form.get('logradouro')?.patchValue(this.config.data.logradouro)
    this.form.get('numero')?.patchValue(this.config.data.numero)
    this.form.get('setor')?.patchValue(this.config.data.setor)
    this.form.get('cidade')?.patchValue(this.config.data.cidade)
    this.form.get('uf')?.patchValue(this.config.data.uf)
  }

  validarForm(): boolean{
    if(!this.form.get('dataNascimento')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Data de Nascimento é obrigatório'})
      return false
    }

    if(!this.form.get('sexo')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Sexo é obrigatório'})
      return false
    }

    if(!this.form.get('logradouro')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Logradouro é obrigatório'})
      return false
    }

    if(!this.form.get('numero')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Número é obrigatório'})
      return false
    }

    if(!this.form.get('setor')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Setor é obrigatório'})
      return false
    }

    if(!this.form.get('cidade')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Cidade é obrigatório'})
      return false
    }

    if(!this.form.get('uf')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'UF é obrigatório'})
      return false
    }

    return true
  }

  cadastrarUsuario(){
    if(!this.validarForm()) return

    if(this.form.value.id){
      this.usuarioService.novoUsuario(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao inserir usuário'})
        }
      })
    }
    else {
      this.usuarioService.salvarUsuario(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao alterar usuário'})
        }
      })
    }
  }
}
