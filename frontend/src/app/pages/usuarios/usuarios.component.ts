import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {DatePipe, NgIf} from '@angular/common';
import {ConfirmationService, MessageService, PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {UsuarioService} from '../../service/usuario.service';
import {Usuario} from '../../interface/usuario';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    Button,
    DatePipe,
    NgIf,
    PrimeTemplate,
    TableModule,
    TooltipModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  usuarios!: Usuario[];

  ref: DynamicDialogRef | undefined

  constructor(private usuarioService: UsuarioService,
              private dialogService : DialogService,
              private messageService: MessageService,
              private confirmationService : ConfirmationService) {
  }

  ngOnInit() {
    this.listarUsuarios()
  }

  adicionar(){
    this.ref = this.dialogService.open(EditarUsuarioComponent, {
      header: 'Novo Usuário',
      width: '20vw',
      height: '65vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Novo usuário cadastrado com sucesso!'})
        this.listarUsuarios()
      }
    })
  }

  editar(usuario: Usuario){
    this.ref = this.dialogService.open(EditarUsuarioComponent, {
      data: usuario,
      header: 'Editar Usuario',
      width: '20vw',
      height: '65vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuario alterado com sucesso!'})
        this.listarUsuarios()
      }
    })
  }

  excluir(usuario: Usuario, event : Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir o registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass:"p-button-text",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.usuarioService.excluirUsuario(usuario).subscribe({
          next: () => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuario excluído com sucesso!'})
            this.listarUsuarios()
          },
          error: () => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao excluir usuario'})
          }
        })
      },
      reject: () => {
      }
    })
  }

  listarUsuarios(){
    this.usuarioService.getUsuarios().subscribe({
      next: result => {
        this.usuarios = result
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao listar usuariomentos'})
      }
    })
  }
}
