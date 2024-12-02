import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AgendaService} from '../../service/agenda.service';
import {Agenda} from '../../interface/agenda';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Button} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EditarAgendaComponent} from './editar-agenda/editar-agenda.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {DarBaixaComponent} from './dar-baixa/dar-baixa.component';

@Component({
  selector: 'app-agendas',
  standalone: true,
  imports: [
    TableModule,
    NgForOf,
    DatePipe,
    Button,
    NgClass,
    NgIf,
    TooltipModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './agendas.component.html',
  styleUrl: './agendas.component.css',
})
export class AgendasComponent implements OnInit{
  agendas!: Agenda[];

  ref: DynamicDialogRef | undefined

  constructor(private agendaService: AgendaService,
              private dialogService : DialogService,
              private messageService: MessageService,
              private confirmationService : ConfirmationService) {

  }

  listarAgendas(){
    this.agendaService.getAgendas().subscribe({
      next: result => {
        this.agendas = result
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao listar agendamentos'})
      }
    })
  }

  ngOnInit() {
    this.listarAgendas()
  }

  adicionar(){
    this.ref = this.dialogService.open(EditarAgendaComponent, {
      header: 'Novo Agendamento',
      width: '20vw',
      height: '65vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Novo agendamento cadastrado com sucesso!'})
        this.listarAgendas()
      }
    })
  }

  editar(agendamento: Agenda){
    this.ref = this.dialogService.open(EditarAgendaComponent, {
      data: agendamento,
      header: 'Editar Agendamento',
      width: '20vw',
      height: '65vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Agendamento alterado com sucesso!'})
        this.listarAgendas()
      }
    })
  }

  excluir(agendamento: Agenda, event : Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir o registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass:"p-button-text",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.agendaService.excluirAgenda(agendamento).subscribe({
          next: () => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Agendamento excluído com sucesso!'})
            this.listarAgendas()
          },
          error: () => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao excluir agendamento'})
          }
        })
      },
      reject: () => {
      }
    })
  }

  darBaixa(agendamento: Agenda){
    this.ref = this.dialogService.open(DarBaixaComponent, {
      data: agendamento,
      header: 'Baixa',
      width: '20vw',
      height: '50vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Baixa realizada com sucesso!'})
        this.listarAgendas()
      }
    })
  }
}
